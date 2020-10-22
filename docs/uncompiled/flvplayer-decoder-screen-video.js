(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.FlvplayerDecoder = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  function getNowTime() {
    if (performance && typeof performance.now === 'function') {
      return performance.now();
    }

    return Date.now();
  }
  function calculationRate(callback) {
    var totalSize = 0;
    var lastTime = getNowTime();
    return function (size) {
      totalSize += size;
      var thisTime = getNowTime();
      var diffTime = thisTime - lastTime;

      if (diffTime >= 1000) {
        callback(totalSize / diffTime * 1000);
        lastTime = thisTime;
        totalSize = 0;
      }
    };
  }

  var VideoSuperDecoder = /*#__PURE__*/function () {
    function VideoSuperDecoder(flv, decoder) {
      var _this = this;

      classCallCheck(this, VideoSuperDecoder);

      this.flv = flv;
      var options = flv.options,
          player = flv.player,
          debug = flv.debug;
      this.ready = false;
      this.playing = false;
      this.playIndex = 0;
      this.videoframes = [];
      this.timestamps = [];
      this.videoInputLength = 0;
      this.videoOutputLength = 0;
      this.decoding = false;
      this.byteSize = 0;
      this.loaded = 0;
      this.decoderRate = calculationRate(function (rate) {
        flv.emit('decoderRate', rate);
      });
      this.drawRate = calculationRate(function (rate) {
        flv.emit('drawRate', rate);
      });
      flv.on('destroy', function () {
        _this.videoframes = [];
        _this.timestamps = [];

        _this.decoderWorker.terminate();

        _this.decoderWorker = null;

        _this.stop();
      });
      flv.on('befoerdecoding', function (timestamp) {
        if (options.live && options.hasAudio && !_this.playing && _this.timestamps.length >= player.frameRate) {
          _this.timestamps.shift();
        }

        _this.timestamps.push(timestamp);

        _this.decoding = true;
        _this.videoInputLength += 1;
      });
      flv.on('decoding', function (message, byteSize) {
        if (options.live && options.hasAudio && !_this.playing && _this.timestamps.length >= player.frameRate) {
          _this.videoframes.shift();
        }

        _this.videoframes.push(message);

        _this.byteSize += byteSize;
        _this.videoOutputLength += 1;
        _this.decoding = _this.videoInputLength !== _this.videoOutputLength;
        _this.loaded = _this.videoOutputLength / player.frameRate;
        flv.emit('videoLoaded', _this.loaded);

        _this.decoderRate(1);

        if (!_this.ready && _this.videoOutputLength === 1) {
          _this.ready = true;

          if (options.live) {
            decoder.currentTime = _this.timestamps[0] / 1000;
          }

          flv.emit('ready');
        }
      });
      flv.on('timeupdate', function (currentTime) {
        var index = _this.playIndex;
        var timestamp = _this.timestamps[index];

        if (timestamp !== undefined && currentTime * 1000 >= timestamp) {
          if (_this.draw(index)) {
            var framesSize = _this.getFramesSize(index);

            if ((options.live || !options.cache) && framesSize >= options.videoChunk * 64 && _this.videoframes.length - 1 > index && _this.timestamps.length - 1 > index) {
              _this.playIndex = 0;

              _this.videoframes.splice(0, index + 1);

              _this.timestamps.splice(0, index + 1);

              decoder.currentTime = _this.timestamps[0] / 1000;
              debug.log('free-video-memory', {
                total: _this.byteSize,
                yuv: framesSize,
                index: index
              });
              flv.emit('freeVideoMemory', framesSize, index);
            } else {
              _this.playIndex += 1;
            }
          } else {
            if (!options.live) {
              _this.stop();
            }
          }
        }
      });
    }

    createClass(VideoSuperDecoder, [{
      key: "draw",
      value: function draw(index) {
        var videoframe = this.videoframes[index];
        if (!videoframe) return false;
        this.renderer.drawFrame(videoframe);
        this.drawRate(1);
        return true;
      }
    }, {
      key: "play",
      value: function play() {
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.playing = true;

        if (this.flv.options.live) {
          this.playIndex = 0;
          this.flv.decoder.currentTime = (this.timestamps[0] || 0) / 1000;
        } else {
          this.playIndex = this.timestamps.findIndex(function (timestamp) {
            return timestamp >= startTime * 1000;
          });
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        this.playing = false;

        if (this.flv.options.live) {
          this.playIndex = 0;
        }
      }
    }]);

    return VideoSuperDecoder;
  }();

  function FlashScreenVideoCanvas(canvas) {
    this.canvasElement = canvas;

    if (this.contextGL) {
      this.initProgram();
    }
  }
  /**
   * Draw picture data to the canvas.
   * Otherwise, data must be an RGBA formatted ArrayBuffer.
   */

  FlashScreenVideoCanvas.prototype.drawFrame = function (frame) {
    var width = frame.width,
        height = frame.height,
        data = frame.data;
    var croppingParams = null;
    this.drawNextOuptutPictureRGBA(width, height, croppingParams, new Uint8Array(data));
  };
  /**
   * Draw next output picture using ARGB data on a 2d canvas.
   */


  FlashScreenVideoCanvas.prototype.drawNextOuptutPictureRGBA = function (width, height, croppingParams, data) {
    var canvas = this.canvasElement;
    var croppingParams = null;
    var argbData = data;
    var ctx = canvas.getContext('2d');
    var imageData = ctx.getImageData(0, 0, width, height);
    imageData.data.set(argbData);

    if (croppingParams === null) {
      ctx.putImageData(imageData, 0, 0);
    } else {
      ctx.putImageData(imageData, -croppingParams.left, -croppingParams.top, 0, 0, croppingParams.width, croppingParams.height);
    }
  };

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var VideoDecoder = /*#__PURE__*/function (_VideoSuperDecoder) {
    inherits(VideoDecoder, _VideoSuperDecoder);

    var _super = _createSuper(VideoDecoder);

    function VideoDecoder(flv, decoder) {
      var _this;

      classCallCheck(this, VideoDecoder);

      _this = _super.call(this, flv, decoder);
      var player = flv.player,
          events = flv.events;
      _this.renderer = new FlashScreenVideoCanvas(player.$canvas);
      flv.on('fsVideoData', function (frame, timestamp) {
        flv.emit('befoerdecoding', timestamp);
        flv.emit('decoding', frame, frame.data.byteLength);
      });
      return _this;
    }

    createClass(VideoDecoder, [{
      key: "getFramesSize",
      value: function getFramesSize(framesIndex) {
        var framesSize = 0;

        for (var index = 0; index < framesIndex; index++) {
          framesSize += this.videoframes[index].data.byteLength;
        }

        return framesSize;
      }
    }]);

    return VideoDecoder;
  }(VideoSuperDecoder);

  return VideoDecoder;

})));
//# sourceMappingURL=flvplayer-decoder-screen-video.js.map
