(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.FlvPlayer = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

  var optionValidator = createCommonjsModule(function (module, exports) {
  !function(r,t){module.exports=t();}(commonjsGlobal,function(){function e(r){return (e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var n=Object.prototype.toString,c=function(r){if(void 0===r)return "undefined";if(null===r)return "null";var t=e(r);if("boolean"===t)return "boolean";if("string"===t)return "string";if("number"===t)return "number";if("symbol"===t)return "symbol";if("function"===t)return function(r){return "GeneratorFunction"===o(r)}(r)?"generatorfunction":"function";if(function(r){return Array.isArray?Array.isArray(r):r instanceof Array}(r))return "array";if(function(r){if(r.constructor&&"function"==typeof r.constructor.isBuffer)return r.constructor.isBuffer(r);return !1}(r))return "buffer";if(function(r){try{if("number"==typeof r.length&&"function"==typeof r.callee)return !0}catch(r){if(-1!==r.message.indexOf("callee"))return !0}return !1}(r))return "arguments";if(function(r){return r instanceof Date||"function"==typeof r.toDateString&&"function"==typeof r.getDate&&"function"==typeof r.setDate}(r))return "date";if(function(r){return r instanceof Error||"string"==typeof r.message&&r.constructor&&"number"==typeof r.constructor.stackTraceLimit}(r))return "error";if(function(r){return r instanceof RegExp||"string"==typeof r.flags&&"boolean"==typeof r.ignoreCase&&"boolean"==typeof r.multiline&&"boolean"==typeof r.global}(r))return "regexp";switch(o(r)){case"Symbol":return "symbol";case"Promise":return "promise";case"WeakMap":return "weakmap";case"WeakSet":return "weakset";case"Map":return "map";case"Set":return "set";case"Int8Array":return "int8array";case"Uint8Array":return "uint8array";case"Uint8ClampedArray":return "uint8clampedarray";case"Int16Array":return "int16array";case"Uint16Array":return "uint16array";case"Int32Array":return "int32array";case"Uint32Array":return "uint32array";case"Float32Array":return "float32array";case"Float64Array":return "float64array"}if(function(r){return "function"==typeof r.throw&&"function"==typeof r.return&&"function"==typeof r.next}(r))return "generator";switch(t=n.call(r)){case"[object Object]":return "object";case"[object Map Iterator]":return "mapiterator";case"[object Set Iterator]":return "setiterator";case"[object String Iterator]":return "stringiterator";case"[object Array Iterator]":return "arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function o(r){return r.constructor?r.constructor.name:null}function f(r,t){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:["option"];return s(r,t,e),y(r,t,e),function(a,i,u){var r=c(i),t=c(a);if("object"===r){if("object"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'object' type, but got '").concat(t,"'"));Object.keys(i).forEach(function(r){var t=a[r],e=i[r],n=u.slice();n.push(r),s(t,e,n),y(t,e,n),f(t,e,n);});}if("array"===r){if("array"!==t)throw new Error("[Type Error]: '".concat(u.join("."),"' require 'array' type, but got '").concat(t,"'"));a.forEach(function(r,t){var e=a[t],n=i[t]||i[0],o=u.slice();o.push(t),s(e,n,o),y(e,n,o),f(e,n,o);});}}(r,t,e),r}function s(r,t,e){if("string"===c(t)){var n=c(r);if("?"===t[0]&&(t=t.slice(1)+"|undefined"),!(-1<t.indexOf("|")?t.split("|").map(function(r){return r.toLowerCase().trim()}).filter(Boolean).some(function(r){return n===r}):t.toLowerCase().trim()===n))throw new Error("[Type Error]: '".concat(e.join("."),"' require '").concat(t,"' type, but got '").concat(n,"'"))}}function y(r,t,e){if("function"===c(t)){var n=t(r,c(r),e);if(!0!==n){var o=c(n);throw "string"===o?new Error(n):"error"===o?n:new Error("[Validator Error]: The scheme for '".concat(e.join("."),"' validator require return true, but got '").concat(n,"'"))}}}return f.kindOf=c,f});
  });

  function checkWebAssembly() {
    try {
      if (_typeof_1(window.WebAssembly) === 'object' && typeof window.WebAssembly.instantiate === 'function') {
        var module = new window.WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));

        if (module instanceof window.WebAssembly.Module) {
          return new window.WebAssembly.Instance(module) instanceof window.WebAssembly.Instance;
        }
      }

      return false;
    } catch (e) {
      return false;
    }
  }
  function checkWorker() {
    return typeof window.Worker === 'function';
  }
  function checkFetch() {
    return typeof window.fetch === 'function';
  }
  function checkURL() {
    return window.URL && typeof window.URL.createObjectURL === 'function';
  }
  function checkReadableStream() {
    return typeof window.ReadableStream === 'function' && typeof window.Response === 'function' && Object.prototype.hasOwnProperty.call(window.Response.prototype, 'body');
  }
  function checkBlob() {
    return typeof window.Blob === 'function' && function () {
      try {
        return !!new window.Blob();
      } catch (e) {
        return false;
      }
    }();
  }
  function checkArrayBuffer() {
    return typeof window.ArrayBuffer === 'function';
  }
  function checkAACType() {
    var canPlay = new Audio().canPlayType('audio/aac;');
    return canPlay === 'probably' || canPlay === 'maybe';
  }
  function checkAudioContext() {
    return window.AudioContext || window.webkitAudioContext;
  }
  function checkWebGL() {
    if (window.WebGLRenderingContext) {
      var canvas = document.createElement('canvas');
      var names = ['webgl2', 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
      var context = false;

      for (var i = 0; i < names.length; i += 1) {
        try {
          context = canvas.getContext(names[i]);

          if (context && typeof context.getParameter === 'function') {
            return true;
          }
        } catch (e) {//
        }
      }

      return false;
    }

    return false;
  }
  function isSupported() {
    return checkWebAssembly() && checkWorker() && checkFetch() && checkBlob() && checkArrayBuffer() && checkURL() && checkAACType() && checkAudioContext() && checkWebGL();
  }

  var Emitter = /*#__PURE__*/function () {
    function Emitter() {
      classCallCheck(this, Emitter);
    }

    createClass(Emitter, [{
      key: "on",
      value: function on(name, fn, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
          fn: fn,
          ctx: ctx
        });
        return this;
      }
    }, {
      key: "once",
      value: function once(name, fn, ctx) {
        var self = this;

        function listener() {
          self.off(name, listener);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          fn.apply(ctx, args);
        }

        listener._ = fn;
        return this.on(name, listener, ctx);
      }
    }, {
      key: "emit",
      value: function emit(name) {
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();

        for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          data[_key2 - 1] = arguments[_key2];
        }

        for (var i = 0; i < evtArr.length; i += 1) {
          evtArr[i].fn.apply(evtArr[i].ctx, data);
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];

        if (evts && callback) {
          for (var i = 0, len = evts.length; i < len; i += 1) {
            if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
          }
        }

        if (liveEvents.length) {
          e[name] = liveEvents;
        } else {
          delete e[name];
        }

        return this;
      }
    }]);

    return Emitter;
  }();

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  var isNativeReflectConstruct = _isNativeReflectConstruct;

  var construct = createCommonjsModule(function (module) {
  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var FlvPlayerError = /*#__PURE__*/function (_Error) {
    inherits(FlvPlayerError, _Error);

    var _super = _createSuper(FlvPlayerError);

    function FlvPlayerError(message) {
      var _this;

      classCallCheck(this, FlvPlayerError);

      _this = _super.call(this, message);
      _this.name = 'FlvPlayerError';
      return _this;
    }

    return FlvPlayerError;
  }( /*#__PURE__*/wrapNativeSuper(Error));

  var Debug = function Debug(flv) {
    classCallCheck(this, Debug);

    var debug = flv.options.debug;

    this.log = function (name) {
      if (debug) {
        var _console;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        (_console = console).log.apply(_console, ["FlvPlayer: [".concat(name, "]")].concat(args));
      }
    };

    this.warn = function (condition) {
      if (!condition && debug) {
        var _console2;

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_console2 = console).warn.apply(_console2, args);
      }
    };

    this.error = function (condition, msg) {
      if (!condition) {
        throw new FlvPlayerError(msg);
      }
    };
  };

  var Events = /*#__PURE__*/function () {
    function Events(flv) {
      var _this = this;

      classCallCheck(this, Events);

      this.destroys = [];
      this.proxy = this.proxy.bind(this);
      flv.on('destroy', function () {
        _this.destroy();
      });
    }

    createClass(Events, [{
      key: "proxy",
      value: function proxy(target, name, callback) {
        var _this2 = this;

        var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        if (Array.isArray(name)) {
          return name.map(function (item) {
            return _this2.proxy(target, item, callback, option);
          });
        }

        target.addEventListener(name, callback, option);

        var destroy = function destroy() {
          return target.removeEventListener(name, callback, option);
        };

        this.destroys.push(destroy);
        return destroy;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.destroys.forEach(function (event) {
          return event();
        });
      }
    }]);

    return Events;
  }();

  function template(flv, player) {
    var options = flv.options;
    var cacheCss = options.container.style.cssText;
    options.container.classList.add('flvplayer-container');
    options.container.innerHTML = "\n        <div class=\"flvplayer-player\">\n            <canvas class=\"flvplayer-canvas\" width=\"".concat(options.width, "\" height=\"").concat(options.height, "\"></canvas>\n        </div>\n    ");
    flv.on('destroy', function () {
      options.container.innerHTML = '';
      options.container.style.cssText = cacheCss;
      options.container.classList.remove('flvplayer-container');
    });
    Object.defineProperty(player, '$container', {
      value: options.container
    });
    Object.defineProperty(player, '$player', {
      value: options.container.querySelector('.flvplayer-player')
    });
    Object.defineProperty(player, '$canvas', {
      value: options.container.querySelector('.flvplayer-canvas')
    });
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  function isWechat() {
    return /MicroMessenger/i.test(navigator.userAgent);
  }
  function hasOwnProperty(obj, name) {
    return Object.prototype.hasOwnProperty.call(obj, name);
  }
  function readBuffer(buffer) {
    var index = 0;

    function read(length) {
      var tempUint8 = new Uint8Array(length);

      for (var i = 0; i < length; i += 1) {
        tempUint8[i] = buffer[index];
        index += 1;
      }

      read.index = index;
      return tempUint8;
    }

    read.index = 0;
    return read;
  }
  function mergeBuffer() {
    for (var _len = arguments.length, buffers = new Array(_len), _key = 0; _key < _len; _key++) {
      buffers[_key] = arguments[_key];
    }

    var Cons = buffers[0].constructor;
    return buffers.reduce(function (pre, val) {
      var merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
      merge.set(pre, 0);
      merge.set(val, pre.byteLength | 0);
      return merge;
    }, new Cons());
  }
  function createWorker(workerString) {
    return new Worker(URL.createObjectURL(new Blob([workerString], {
      type: 'application/javascript'
    })));
  }
  function secondToTime(second) {
    var add0 = function add0(num) {
      return num < 10 ? "0".concat(num) : String(num);
    };

    var hour = Math.floor(second / 3600);
    var min = Math.floor((second - hour * 3600) / 60);
    var sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
  }
  function getNowTime() {
    if (performance && typeof performance.now === 'function') {
      return performance.now();
    }

    return Date.now();
  }
  function debounce(func, wait, context) {
    var timeout;

    function fn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    fn.clearTimeout = function ct() {
      clearTimeout(timeout);
    };

    return fn;
  }
  function throttle(callback, delay) {
    var isThrottled = false;
    var args;
    var context;

    function fn() {
      for (var _len3 = arguments.length, args2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args2[_key3] = arguments[_key3];
      }

      if (isThrottled) {
        args = args2;
        context = this;
        return;
      }

      isThrottled = true;
      callback.apply(this, args2);
      setTimeout(function () {
        isThrottled = false;

        if (args) {
          fn.apply(context, args);
          args = null;
          context = null;
        }
      }, delay);
    }

    return fn;
  }
  function clamp(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  }
  function setStyle(element, key, value) {
    if (_typeof_1(key) === 'object') {
      Object.keys(key).forEach(function (item) {
        setStyle(element, item, key[item]);
      });
    }

    element.style[key] = value;
    return element;
  }
  function getStyle(element, key) {
    var numberType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var value = getComputedStyle(element, null).getPropertyValue(key);
    return numberType ? parseFloat(value) : value;
  }
  function loadScript(url, name) {
    return new Promise(function (resolve, reject) {
      var $script = document.createElement('script');
      $script.type = 'text/javascript';

      $script.onload = function () {
        if (window[name]) {
          resolve(window[name]);
        } else {
          reject(new Error("Unable to find global variable '".concat(name, "' from '").concat(url, "'")));
        }
      };

      $script.onerror = function () {
        reject(new Error("Resource loading failed '".concat(url, "'")));
      };

      $script.src = url;
      document.head.appendChild($script);
    });
  }
  function proxyPropertys(target) {
    for (var _len4 = arguments.length, sources = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      sources[_key4 - 1] = arguments[_key4];
    }

    return sources.reduce(function (result, source) {
      Object.getOwnPropertyNames(source).forEach(function (key) {
        if (!hasOwnProperty(result, key)) {
          Object.defineProperty(result, key, Object.getOwnPropertyDescriptor(source, key));
        } else {
          throw new Error("Target attribute name is duplicated: ".concat(key));
        }
      });
      return result;
    }, target);
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

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isMobile: isMobile,
    isWechat: isWechat,
    hasOwnProperty: hasOwnProperty,
    readBuffer: readBuffer,
    mergeBuffer: mergeBuffer,
    createWorker: createWorker,
    secondToTime: secondToTime,
    getNowTime: getNowTime,
    debounce: debounce,
    throttle: throttle,
    clamp: clamp,
    setStyle: setStyle,
    getStyle: getStyle,
    loadScript: loadScript,
    proxyPropertys: proxyPropertys,
    calculationRate: calculationRate
  });

  function property(flv, player) {
    Object.defineProperty(player, 'rect', {
      get: function get() {
        return player.$container.getBoundingClientRect();
      }
    });
    ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(function (key) {
      Object.defineProperty(player, key, {
        get: function get() {
          return player.rect[key];
        }
      });
    });
    Object.defineProperty(player, 'currentTime', {
      get: function get() {
        return flv.decoder.currentTime;
      },
      set: function set(time) {
        if (flv.options.cache) {
          flv.decoder.seeked(clamp(time, 0, player.loaded));
        }
      }
    });
    Object.defineProperty(player, 'streaming', {
      get: function get() {
        return flv.demuxer.streaming;
      }
    });
    Object.defineProperty(player, 'demuxed', {
      get: function get() {
        return flv.demuxer.demuxed;
      }
    });
    Object.defineProperty(player, 'videoDecoding', {
      get: function get() {
        return flv.decoder.video.decoding;
      }
    });
    Object.defineProperty(player, 'audioDecoding', {
      get: function get() {
        return flv.decoder.audio.decoding;
      }
    });
    Object.defineProperty(player, 'duration', {
      get: function get() {
        try {
          return flv.demuxer.scripMeta.amf2.metaData.duration || flv.options.duration;
        } catch (error) {
          return flv.options.duration;
        }
      }
    });
    Object.defineProperty(player, 'frameRate', {
      get: function get() {
        var defaultFrameRate = Math.round(flv.options.frameRate || 30);

        try {
          return Math.round(flv.demuxer.scripMeta.amf2.metaData.framerate) || defaultFrameRate;
        } catch (error) {
          return defaultFrameRate;
        }
      }
    });
    Object.defineProperty(player, 'frameDuration', {
      get: function get() {
        return 1000 / player.frameRate | 0;
      }
    });
    Object.defineProperty(player, 'muted', {
      get: function get() {
        return flv.decoder.audio.muted;
      },
      set: function set(value) {
        flv.decoder.audio.muted = value;
      }
    });
    Object.defineProperty(player, 'volume', {
      get: function get() {
        try {
          return flv.decoder.audio.volume;
        } catch (error) {
          return 0;
        }
      },
      set: function set(value) {
        try {
          flv.decoder.audio.volume = clamp(value, 0, 1);
          return player.volume;
        } catch (error) {
          return value;
        }
      }
    });
    Object.defineProperty(player, 'loaded', {
      get: function get() {
        return flv.decoder.video.loaded;
      }
    });
    Object.defineProperty(player, 'playing', {
      get: function get() {
        return flv.decoder.playing;
      }
    });
    Object.defineProperty(player, 'ended', {
      get: function get() {
        return flv.decoder.ended;
      }
    });
    Object.defineProperty(player, 'play', {
      value: function value() {
        if (!player.playing) {
          flv.decoder.play();
        }
      }
    });
    Object.defineProperty(player, 'pause', {
      value: function value() {
        flv.decoder.pause();
      }
    });
    Object.defineProperty(player, 'toggle', {
      value: function value() {
        if (player.playing) {
          player.pause();
        } else {
          player.play();
        }
      }
    });
  }

  function events(flv, player) {
    var proxy = flv.events.proxy;
    flv.on('scripMeta', function (scripMeta) {
      var _scripMeta$amf2$metaD = scripMeta.amf2.metaData,
          width = _scripMeta$amf2$metaD.width,
          height = _scripMeta$amf2$metaD.height;

      if (width && height) {
        player.$canvas.width = width;
        player.$canvas.height = height;
      }
    });
    proxy(player.$canvas, 'click', function () {
      player.toggle();
    });
  }

  var Player = function Player(flv) {
    classCallCheck(this, Player);

    template(flv, this);
    property(flv, this);
    events(flv, this);
  };

  function clamp$1(num, a, b) {
    return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
  }

  function mergeBuffer$1(...buffers) {
    const Cons = buffers[0].constructor;
    return buffers.reduce((pre, val) => {
      const merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
      merge.set(pre, 0);
      merge.set(val, pre.byteLength | 0);
      return merge;
    }, new Cons());
  }

  function debounce$1(func, wait, context) {
    let timeout;
    return function fn(...args) {
      const later = function later() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  class Dida {
    constructor(option = {}) {
      this.option = optionValidator(
        {
          ...Dida.option,
          ...option,
        },
        Dida.scheme,
      );

      this.option.volume = clamp$1(this.option.volume, 0, 1);
      this.option.chunk = clamp$1(this.option.chunk, 0, Infinity);
      this.option.maxTimeDiff = clamp$1(this.option.maxTimeDiff, 0, Infinity);
      this.option.autoEndTime = clamp$1(this.option.autoEndTime, 0, Infinity);

      this.context = new (window.AudioContext || window.webkitAudioContext)();
      this.gainNode = this.context.createGain();
      this.gainNode.gain.value = this.option.volume;
      this.source = null;

      this.decoding = false;
      this.playing = false;
      this.loadLength = 0;
      this.loadByteSize = 0;
      this.audioDuration = 0;
      this.pcmLength = 0;

      this.timestamps = [];
      this.audiobuffers = [];
      this.timestampTmp = [];
      this.decodeErrorBuffer = new Uint8Array();
      this.decodeWaitingBuffer = new Uint8Array();

      this.autoEndDebounce = debounce$1(() => {
        this.end();
      }, this.option.autoEndTime);

      if (this.option.touchResume) {
        if (this.context.state === 'suspended' && 'ontouchstart' in window) {
          const unlock = () => {
            this.context.resume();
            this.volume = 1;
            document.body.removeEventListener('touchstart', unlock, false);
            document.body.removeEventListener('click', unlock, false);
          };
          document.body.addEventListener('touchstart', unlock, false);
          document.body.addEventListener('click', unlock, false);
        }
      }
    }

    static get option() {
      return {
        volume: 0.7,
        cache: true,
        chunk: 64 * 1024,
        maxTimeDiff: 200,
        autoEnd: true,
        autoEndTime: 5000,
        touchResume: true,
        onNext: t => t,
        onLoad: () => null,
        onStop: () => null,
        onPlay: () => null,
        onEnd: () => null,
        onDestroy: () => null,
        onDecodeDone: () => null,
        onDecodeError: () => null,
        onVolumeChange: () => null,
        onFreeMemory: () => null,
      };
    }

    static get scheme() {
      return {
        volume: 'number',
        cache: 'boolean',
        chunk: 'number',
        maxTimeDiff: 'number',
        autoEnd: 'boolean',
        autoEndTime: 'number',
        touchResume: 'boolean',
        onNext: 'function',
        onLoad: 'function',
        onStop: 'function',
        onPlay: 'function',
        onEnd: 'function',
        onDestroy: 'function',
        onDecodeDone: 'function',
        onDecodeError: 'function',
        onVolumeChange: 'function',
        onFreeMemory: 'function',
      };
    }

    get volume() {
      return this.gainNode.gain.value;
    }

    set volume(value) {
      this.gainNode.gain.value = clamp$1(value, 0, 1);
      this.option.onVolumeChange(value);
    }

    get duration() {
      return this.audiobuffers.reduce((result, item) => {
        result += item.duration;
        return result;
      }, 0);
    }

    destroy() {
      this.stop();
      this.context = null;
      this.gainNode = null;
      this.source = null;
      this.timestamps = [];
      this.audiobuffers = [];
      this.timestampTmp = [];
      this.decodeErrorBuffer = new Uint8Array();
      this.decodeWaitingBuffer = new Uint8Array();
      this.option.onDestroy();
      return this;
    }

    load(uint8, timestamp) {
      this.decoding = true;
      this.loadLength += 1;
      this.loadByteSize += uint8.byteLength;
      this.option.onLoad(uint8, timestamp);
      if (this.decodeWaitingBuffer.byteLength >= this.option.chunk) {
        this.timestamps.push(this.timestampTmp[0]);
        this.timestampTmp = [];
        const { buffer } = mergeBuffer$1(this.decodeErrorBuffer, this.decodeWaitingBuffer);
        this.decodeWaitingBuffer = new Uint8Array();
        this.context.decodeAudioData(
          buffer,
          audiobuffer => {
            this.audioDuration += audiobuffer.duration;
            this.pcmLength += audiobuffer.length;
            this.audiobuffers.push(audiobuffer);
            this.decodeErrorBuffer = new Uint8Array();
            this.option.onDecodeDone(audiobuffer);
          },
          error => {
            this.decodeErrorBuffer = mergeBuffer$1(this.decodeErrorBuffer, this.decodeWaitingBuffer);
            this.option.onDecodeError(error);
          },
        );
      } else {
        this.timestampTmp.push(timestamp);
        this.decodeWaitingBuffer = mergeBuffer$1(this.decodeWaitingBuffer, uint8);
      }
      if (this.option.autoEnd) {
        this.autoEndDebounce();
      }
      return this;
    }

    end() {
      if (this.decodeWaitingBuffer.length) {
        this.timestamps.push(this.timestampTmp[0]);
        this.timestampTmp = [];
        const { buffer } = this.decodeWaitingBuffer;
        this.decodeWaitingBuffer = new Uint8Array();
        this.decodeErrorBuffer = new Uint8Array();
        this.context.decodeAudioData(buffer, audiobuffer => {
          this.audioDuration += audiobuffer.duration;
          this.pcmLength += audiobuffer.length;
          this.audiobuffers.push(audiobuffer);
          this.decoding = false;
          this.option.onEnd();
        });
      }
      return this;
    }

    findIndex(startTime) {
      return this.timestamps.findIndex((timestamp, i) => {
        const audiobuffer = this.audiobuffers[i];
        return audiobuffer && timestamp + audiobuffer.duration * 1000 >= startTime;
      });
    }

    play(startTime = 0) {
      if (this.source) {
        this.source.onended = null;
        this.source.stop();
        this.source = null;
      }

      startTime += 1;
      this.playing = true;
      const index = this.findIndex(startTime);
      const timestamp = this.timestamps[index];
      const audiobuffer = this.audiobuffers[index];
      if (timestamp === undefined || audiobuffer === undefined) return this.stop(index, timestamp);
      const offset = Math.max(0, (startTime - timestamp) / 1000);
      this.source = this.context.createBufferSource();
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.source.buffer = audiobuffer;
      this.option.onPlay(audiobuffer, startTime, offset);
      this.source.start(0, offset);
      this.source.onended = () => {
        const nextTimestamp = this.timestamps[index + 1];
        const nextAudiobuffer = this.audiobuffers[index + 1];
        if (nextTimestamp !== undefined && nextAudiobuffer !== undefined) {
          const adjustNextTimestamp = this.option.onNext(nextTimestamp);
          const adjustIndex = this.findIndex(adjustNextTimestamp);
          if (!this.option.cache && adjustIndex > 0) {
            this.option.onFreeMemory({
              total: this.pcmLength,
              pcm: this.audiobuffers.reduce((result, item) => {
                result += item.length;
                return result;
              }, 0),
              index: adjustIndex,
            });
            this.audiobuffers.splice(0, adjustIndex);
            this.timestamps.splice(0, adjustIndex);
          }
          this.play(adjustNextTimestamp);
        } else {
          this.stop(index, timestamp);
        }
      };
      return this;
    }

    stop(index, timestamp) {
      this.playing = false;
      if (this.source) {
        this.source.onended = null;
        this.source.stop();
        this.source = null;
      }
      this.option.onStop(index, timestamp);
      return this;
    }
  }

  var AudioDecoder = /*#__PURE__*/function () {
    function AudioDecoder(flv, decoder) {
      var _this = this;

      classCallCheck(this, AudioDecoder);

      this.flv = flv;
      this.dida = new Dida({
        volume: flv.options.muted ? 0 : flv.options.volume,
        cache: flv.options.cache,
        chunk: flv.options.audioChunk,
        maxTimeDiff: flv.options.maxTimeDiff,
        touchResume: flv.options.touchResume,
        onNext: function onNext(timestamp) {
          var currentTime = decoder.currentTime * 1000;
          var timeDiff = timestamp - currentTime;
          flv.debug.log('time-diff', timeDiff);

          if (Math.abs(timeDiff) >= flv.options.maxTimeDiff) {
            flv.debug.log('time-sync', timeDiff);
            decoder.currentTime = timestamp / 1000;
          }

          return timestamp;
        },
        onVolumeChange: function onVolumeChange(value) {
          flv.emit('volumechange', value);
        },
        onFreeMemory: function onFreeMemory(info) {
          flv.debug.log('free-audio-memory', info);
          flv.emit('freeAudioMemory', info);
        }
      });
      flv.on('audioData', function (uint8, timestamp) {
        _this.dida.load(uint8, timestamp);
      });
      flv.on('destroy', function () {
        _this.dida.destroy();
      });
    }

    createClass(AudioDecoder, [{
      key: "play",
      value: function play() {
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.dida.play(startTime * 1000);
      }
    }, {
      key: "stop",
      value: function stop() {
        this.dida.stop();
      }
    }, {
      key: "muted",
      get: function get() {
        return this.volume === 0;
      },
      set: function set(value) {
        if (value) {
          this.volume = 0;
        } else {
          this.volume = 0.7;
        }
      }
    }, {
      key: "volume",
      get: function get() {
        return this.dida.volume;
      },
      set: function set(volume) {
        this.dida.volume = volume;
      }
    }, {
      key: "decoding",
      get: function get() {
        return this.dida.decoding;
      }
    }, {
      key: "playing",
      get: function get() {
        return this.dida.playing;
      }
    }]);

    return AudioDecoder;
  }();

  var Decoder = /*#__PURE__*/function () {
    function Decoder(flv) {
      var _this = this;

      classCallCheck(this, Decoder);

      this.flv = flv;
      this.ended = false;
      this.playing = false;
      this.waiting = false;
      this.animationFrameTimer = null;
      this.waitingTimer = null;
      this.currentTime = 0;
      this.lastUpdateTime = 0;
      this.video = new window.FlvplayerDecoder(flv, this);

      if (flv.options.hasAudio) {
        this.audio = new AudioDecoder(flv, this);
      } else {
        this.audio = {
          play: function play() {
            return null;
          },
          stop: function stop() {
            return null;
          },
          playing: true,
          decoding: false
        };
      }

      flv.on('ready', function () {
        if (flv.options.autoPlay) {
          _this.play();
        } else {
          _this.video.draw(0);
        }
      });
      flv.on('destroy', function () {
        _this.pause();
      });
      flv.on('timeupdate', function (currentTime) {
        if (!flv.options.live && currentTime >= flv.player.duration) {
          _this.pause();
        }
      });
      var isPlaying = false;
      flv.events.proxy(document, 'visibilitychange', function () {
        if (document.hidden) {
          isPlaying = _this.playing;

          _this.pause();
        } else if (isPlaying) {
          _this.play();
        }
      });
    }

    createClass(Decoder, [{
      key: "play",
      value: function play() {
        this.lastUpdateTime = getNowTime();
        this.video.play(this.currentTime);
        this.audio.play(this.currentTime);
        this.animationFrame();
        this.flv.emit('play');
      }
    }, {
      key: "animationFrame",
      value: function animationFrame() {
        var _this2 = this;

        var _this$flv = this.flv,
            options = _this$flv.options,
            player = _this$flv.player,
            debug = _this$flv.debug;
        this.animationFrameTimer = requestAnimationFrame(function () {
          if (_this2.video.playing && _this2.audio.playing) {
            _this2.ended = false;
            _this2.playing = true;
            _this2.waiting = false;
            var updateTime = getNowTime();
            _this2.currentTime += (updateTime - _this2.lastUpdateTime) / 1000;
            _this2.lastUpdateTime = updateTime;

            _this2.flv.emit('timeupdate', _this2.currentTime);
          } else if (player.streaming || _this2.video.decoding || _this2.audio.decoding) {
            _this2.ended = false;
            _this2.playing = true;
            _this2.waiting = true;

            _this2.flv.emit('waiting', _this2.currentTime);

            _this2.waitingTimer = setTimeout(function () {
              debug.log('play-retry', {
                streaming: player.streaming,
                playing: {
                  video: _this2.video.playing,
                  audio: _this2.audio.playing
                },
                decoding: {
                  video: _this2.video.decoding,
                  audio: _this2.audio.decoding
                }
              });

              _this2.play();
            }, options.live ? 3000 : 1000);
            return;
          } else {
            _this2.ended = true;
            _this2.playing = false;
            _this2.waiting = false;

            _this2.pause();

            _this2.flv.emit('ended', _this2.currentTime);

            if (options.loop && options.cache && !options.live) {
              _this2.currentTime = 0;

              _this2.play();

              _this2.flv.emit('loop');
            }

            return;
          }

          _this2.animationFrame();
        });
      }
    }, {
      key: "pause",
      value: function pause() {
        cancelAnimationFrame(this.animationFrameTimer);
        clearTimeout(this.waitingTimer);
        this.animationFrameTimer = null;
        this.waitingTimer = null;
        this.video.stop();
        this.audio.stop();
        this.ended = false;
        this.playing = false;
        this.waiting = false;
        this.flv.emit('pause');
      }
    }, {
      key: "seeked",
      value: function seeked(time) {
        var _this$flv2 = this.flv,
            player = _this$flv2.player,
            options = _this$flv2.options;
        if (!options.cache || options.live) return;
        cancelAnimationFrame(this.animationFrameTimer);
        clearTimeout(this.waitingTimer);
        this.animationFrameTimer = null;
        this.waitingTimer = null;
        this.currentTime = time;
        this.video.draw(Math.floor(time * player.frameRate));

        if (this.playing) {
          this.play();
        }

        this.flv.emit('seeked', time);
      }
    }]);

    return Decoder;
  }();

  function getProfileString(profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline';

      case 77:
        return 'Main';

      case 88:
        return 'Extended';

      case 100:
        return 'High';

      case 110:
        return 'High10';

      case 122:
        return 'High422';

      case 244:
        return 'High444';

      default:
        return 'Unknown';
    }
  }

  function getLevelString(levelIdc) {
    return (levelIdc / 10).toFixed(1);
  }

  function getAVCCodecs(record) {
    var AVCProfileIndication = record.AVCProfileIndication.toString(16);
    var profileCompatibility = record.profile_compatibility.toString(16);
    var AVCLevelIndication = record.AVCLevelIndication.toString(16);
    return "avc1.".concat(AVCProfileIndication).concat(profileCompatibility).concat(AVCLevelIndication);
  }

  function getAACCodecs(_ref) {
    var audioObjectType = _ref.audioObjectType;
    var objectTypeId = (audioObjectType - 1 << 6).toString(16);
    return "mp4a.".concat(objectTypeId, ".").concat(audioObjectType);
  }

  var Demuxer = function Demuxer(flv) {
    var _this = this;

    classCallCheck(this, Demuxer);

    var options = flv.options,
        debug = flv.debug;
    this.header = null;
    this.streaming = false;
    this.demuxed = false;
    this.videoDataSize = 0;
    this.audioDataSize = 0;
    this.videoDataLength = 0;
    this.audioDataLength = 0;
    this.streamStartTime = 0;
    this.streamEndTime = 0;
    this.scripMeta = null;
    this.AudioSpecificConfig = null;
    this.AVCDecoderConfigurationRecord = null;
    this.demuxWorker = new Worker(URL.createObjectURL(new Blob(["\"use strict\";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError(\"Cannot call a class as a function\")}function _inherits(a,b){if(\"function\"!=typeof b&&null!==b)throw new TypeError(\"Super expression must either be null or a function\");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&(\"object\"===_typeof(b)||\"function\"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return a}function _wrapNativeSuper(a){var b=\"function\"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(a){function c(){return _construct(a,arguments,_getPrototypeOf(this).constructor)}if(null===a||!_isNativeFunction(a))return a;if(\"function\"!=typeof a)throw new TypeError(\"Super expression must either be null or a function\");if(\"undefined\"!=typeof b){if(b.has(a))return b.get(a);b.set(a,c)}return c.prototype=Object.create(a.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(c,a)},_wrapNativeSuper(a)}function _construct(){return _construct=_isNativeReflectConstruct()?Reflect.construct:function(b,c,d){var e=[null];e.push.apply(e,c);var a=Function.bind.apply(b,e),f=new a;return d&&_setPrototypeOf(f,d.prototype),f},_construct.apply(null,arguments)}function _isNativeReflectConstruct(){if(\"undefined\"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if(\"function\"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _isNativeFunction(a){return-1!==Function.toString.call(a).indexOf(\"[native code]\")}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _typeof(a){\"@babel/helpers - typeof\";return _typeof=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&\"function\"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?\"symbol\":typeof a},_typeof(a)}!function(a,b){\"object\"==(\"undefined\"==typeof exports?\"undefined\":_typeof(exports))&&\"undefined\"!=typeof module?b(exports):\"function\"==typeof define&&define.amd?define([\"exports\"],b):b((a=\"undefined\"==typeof globalThis?a||self:globalThis).pako={})}(void 0,function(c){\"use strict\";function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function f(b){for(var c,e=Array.prototype.slice.call(arguments,1);e.length;)if(c=e.shift(),c){if(\"object\"!=_typeof(c))throw new TypeError(c+\"must be non-object\");for(var a in c)d(c,a)&&(b[a]=c[a])}return b}function l(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)}function v(b){var c,d,f,g,h,j=b.length,k=0;for(g=0;g<j;g++)55296==(64512&(d=b.charCodeAt(g)))&&g+1<j&&56320==(64512&(f=b.charCodeAt(g+1)))&&(d=65536+(d-55296<<10)+(f-56320),g++),k+=128>d?1:2048>d?2:65536>d?3:4;for(c=new Uint8Array(k),h=0,g=0;h<k;g++)55296==(64512&(d=b.charCodeAt(g)))&&g+1<j&&56320==(64512&(f=b.charCodeAt(g+1)))&&(d=65536+(d-55296<<10)+(f-56320),g++),128>d?c[h++]=d:2048>d?(c[h++]=192|d>>>6,c[h++]=128|63&d):65536>d?(c[h++]=224|d>>>12,c[h++]=128|63&d>>>6,c[h++]=128|63&d):(c[h++]=240|d>>>18,c[h++]=128|63&d>>>12,c[h++]=128|63&d>>>6,c[h++]=128|63&d);return c}function g(b,c){if(65534>c&&(b.subarray&&Ka()||!b.subarray&&Ja()))return String.fromCharCode.apply(null,l(b,c));for(var d=\"\",e=0;e<c;e++)d+=String.fromCharCode(b[e]);return d}function e(b,c){var d,e,f,h,j=c||b.length,k=Array(2*j);for(e=0,d=0;d<j;)if(128>(f=b[d++]))k[e++]=f;else if(4<(h=La(f)))k[e++]=65533,d+=h-1;else{for(f&=2===h?31:3===h?15:7;1<h&&d<j;)f=f<<6|63&b[d++],h--;1<h?k[e++]=65533:65536>f?k[e++]=f:(f-=65536,k[e++]=55296|1023&f>>10,k[e++]=56320|1023&f)}return g(k,e)}function b(b,c){var d;for((c=c||b.length)>b.length&&(c=b.length),d=c-1;0<=d&&128==(192&b[d]);)d--;return 0>d||0===d?c:d+La(b[d])>c?d:c}function o(b,c,d,e){for(var f=0|65535&b,g=0|65535&b>>>16,h=0;0!==d;){d-=h=2e3<d?2e3:d;do g=0|g+(f=0|f+c[e++]);while(--h);f%=65521,g%=65521}return 0|(f|g<<16)}function p(b,c,d,a){var e=Ma();b^=-1;for(var f=a;f<a+d;f++)b=b>>>8^e[255&(b^c[f])];return-1^b}function i(j,q){var e,t,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y;e=j.state,t=j.next_in,X=j.input,C=t+(j.avail_in-5),D=j.next_out,Y=j.output,E=D-(q-j.avail_out),F=D+(j.avail_out-257),G=e.dmax,H=e.wsize,I=e.whave,J=e.wnext,K=e.window,L=e.hold,M=e.bits,N=e.lencode,O=e.distcode,P=(1<<e.lenbits)-1,Q=(1<<e.distbits)-1;t:do{15>M&&(L+=X[t++]<<M,M+=8,L+=X[t++]<<M,M+=8),R=N[L&P];e:for(;;){if(L>>>=S=R>>>24,M-=S,0==(S=255&R>>>16))Y[D++]=65535&R;else{if(!(16&S)){if(0==(64&S)){R=N[(65535&R)+(L&(1<<S)-1)];continue e}if(32&S){e.mode=12;break t}j.msg=\"invalid literal/length code\",e.mode=30;break t}T=65535&R,(S&=15)&&(M<S&&(L+=X[t++]<<M,M+=8),T+=L&(1<<S)-1,L>>>=S,M-=S),15>M&&(L+=X[t++]<<M,M+=8,L+=X[t++]<<M,M+=8),R=O[L&Q];a:for(;;){if(L>>>=S=R>>>24,M-=S,!(16&(S=255&R>>>16))){if(0==(64&S)){R=O[(65535&R)+(L&(1<<S)-1)];continue a}j.msg=\"invalid distance code\",e.mode=30;break t}if(U=65535&R,M<(S&=15)&&(L+=X[t++]<<M,(M+=8)<S&&(L+=X[t++]<<M,M+=8)),(U+=L&(1<<S)-1)>G){j.msg=\"invalid distance too far back\",e.mode=30;break t}if(L>>>=S,M-=S,U>(S=D-E)){if((S=U-S)>I&&e.sane){j.msg=\"invalid distance too far back\",e.mode=30;break t}if(V=0,W=K,0===J){if(V+=H-S,S<T){T-=S;do Y[D++]=K[V++];while(--S);V=D-U,W=Y}}else if(J<S){if(V+=H+J-S,(S-=J)<T){T-=S;do Y[D++]=K[V++];while(--S);if(V=0,J<T){T-=S=J;do Y[D++]=K[V++];while(--S);V=D-U,W=Y}}}else if(V+=J-S,S<T){T-=S;do Y[D++]=K[V++];while(--S);V=D-U,W=Y}for(;2<T;)Y[D++]=W[V++],Y[D++]=W[V++],Y[D++]=W[V++],T-=3;T&&(Y[D++]=W[V++],1<T&&(Y[D++]=W[V++]))}else{V=D-U;do Y[D++]=Y[V++],Y[D++]=Y[V++],Y[D++]=Y[V++],T-=3;while(2<T);T&&(Y[D++]=Y[V++],1<T&&(Y[D++]=Y[V++]))}break}}break}}while(t<C&&D<F);t-=T=M>>3,L&=(1<<(M-=T<<3))-1,j.next_in=t,j.next_out=D,j.avail_in=t<C?C-t+5:5-(t-C),j.avail_out=D<F?F-D+257:257-(D-F),e.hold=L,e.bits=M}function k(d,q,e,a,i,n,t,s){var o,B,F,G,H,I,J,K,M,P=s.bits,m=0,Q=0,V=0,W=0,X=0,Y=0,$=0,aa=0,ba=0,ca=0,da=null,ea=0,fa=Ha(16),D=Ha(16),L=null,ga=0;for(m=0;15>=m;m++)fa[m]=0;for(Q=0;Q<a;Q++)fa[q[e+Q]]++;for(X=P,W=15;1<=W&&0===fa[W];W--);if(X>W&&(X=W),0==W)return i[n++]=20971520,i[n++]=20971520,s.bits=1,0;for(V=1;V<W&&0===fa[V];V++);for(X<V&&(X=V),aa=1,m=1;15>=m;m++)if(aa<<=1,0>(aa-=fa[m]))return-1;if(0<aa&&(0===d||1!==W))return-1;for(D[1]=0,m=1;15>m;m++)D[m+1]=D[m]+fa[m];for(Q=0;Q<a;Q++)0!==q[e+Q]&&(t[D[q[e+Q]]++]=Q);if(0===d?(da=L=t,I=19):1===d?(da=Na,ea-=257,L=x,ga-=257,I=256):(da=z,L=A,I=-1),ca=0,Q=0,m=V,H=n,Y=X,$=0,F=-1,G=(ba=1<<X)-1,1===d&&852<ba||2===d&&592<ba)return 1;for(;;){J=m-$,t[Q]<I?(K=0,M=t[Q]):t[Q]>I?(K=L[ga+t[Q]],M=da[ea+t[Q]]):(K=96,M=0),o=1<<m-$,V=B=1<<Y;do i[H+(ca>>$)+(B-=o)]=0|(J<<24|K<<16|M);while(0!==B);for(o=1<<m-1;ca&o;)o>>=1;if(0===o?ca=0:(ca&=o-1,ca+=o),Q++,0==--fa[m]){if(m===W)break;m=q[e+t[Q]]}if(m>X&&(ca&G)!==F){for(0===$&&($=X),H+=V,aa=1<<(Y=m-$);Y+$<W&&!(0>=(aa-=fa[Y+$]));)Y++,aa<<=1;if(ba+=1<<Y,1===d&&852<ba||2===d&&592<ba)return 1;i[F=ca&G]=0|(X<<24|Y<<16|H-n)}}return 0!=ca&&(i[H+ca]=0|(m-$<<24|4194304)),s.bits=X,0}function u(a){return(255&a>>>24)+(65280&a>>>8)+((65280&a)<<8)+((255&a)<<24)}function h(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=Ha(320),this.work=Ha(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function m(a){var b;return a&&a.state?((b=a.state).wsize=0,b.whave=0,b.wnext=0,function(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg=\"\",b.wrap&&(a.adler=1&b.wrap),b.mode=1,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=Ia(852),b.distcode=b.distdyn=Ia(592),b.sane=1,b.back=-1,0):-2}(a)):-2}function a(b,c){var d,e;return b?(e=new h,b.state=e,e.window=null,0!==(d=function(b,c){var d,f;return b&&b.state?(f=b.state,0>c?(d=0,c=-c):(d=1+(c>>4),48>c&&(c&=15)),c&&(8>c||15<c)?-2:(null!==f.window&&f.wbits!==c&&(f.window=null),f.wrap=d,f.wbits=c,m(b))):-2}(b,c))&&(b.state=null),d):-2}function s(a){if(B){var b;for(Ba=Ia(512),Ca=Ia(32),b=0;144>b;)a.lens[b++]=8;for(;256>b;)a.lens[b++]=9;for(;280>b;)a.lens[b++]=7;for(;288>b;)a.lens[b++]=8;for(k(1,a.lens,0,288,Ba,0,a.work,{bits:9}),b=0;32>b;)a.lens[b++]=5;k(2,a.lens,0,32,Ca,0,a.work,{bits:5}),B=!1}a.lencode=Ba,a.lenbits=9,a.distcode=Ca,a.distbits=5}function y(b,c,d,a){var e,f=b.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=Ga(f.wsize)),a>=f.wsize?(Ea(f.window,c,d-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):((e=f.wsize-f.wnext)>a&&(e=a),Ea(f.window,c,d-a,e,f.wnext),(a-=e)?(Ea(f.window,c,d-a,a,0),f.wnext=a,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function t(j,l){var e,q,t,D,E,F,G,H,I,J,K,L,M,P,Q,S,V,W,X,Y,$,aa,ba,ca,da=0,ea=Ga(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!j||!j.state||!j.output||!j.input&&0!==j.avail_in)return-2;12===(e=j.state).mode&&(e.mode=13),E=j.next_out,t=j.output,G=j.avail_out,D=j.next_in,q=j.input,F=j.avail_in,H=e.hold,I=e.bits,J=F,K=G,aa=0;t:for(;;)switch(e.mode){case 1:if(0===e.wrap){e.mode=13;break}for(;16>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(2&e.wrap&&35615===H){e.check=0,ea[0]=255&H,ea[1]=255&H>>>8,e.check=p(e.check,ea,2,0),H=0,I=0,e.mode=2;break}if(e.flags=0,e.head&&(e.head.done=!1),!(1&e.wrap)||(((255&H)<<8)+(H>>8))%31){j.msg=\"incorrect header check\",e.mode=30;break}if(8!=(15&H)){j.msg=\"unknown compression method\",e.mode=30;break}if(I-=4,$=8+(15&(H>>>=4)),0===e.wbits)e.wbits=$;else if($>e.wbits){j.msg=\"invalid window size\",e.mode=30;break}e.dmax=1<<$,j.adler=e.check=1,e.mode=512&H?10:12,H=0,I=0;break;case 2:for(;16>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(e.flags=H,8!=(255&e.flags)){j.msg=\"unknown compression method\",e.mode=30;break}if(57344&e.flags){j.msg=\"unknown header flags set\",e.mode=30;break}e.head&&(e.head.text=1&H>>8),512&e.flags&&(ea[0]=255&H,ea[1]=255&H>>>8,e.check=p(e.check,ea,2,0)),H=0,I=0,e.mode=3;case 3:for(;32>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}e.head&&(e.head.time=H),512&e.flags&&(ea[0]=255&H,ea[1]=255&H>>>8,ea[2]=255&H>>>16,ea[3]=255&H>>>24,e.check=p(e.check,ea,4,0)),H=0,I=0,e.mode=4;case 4:for(;16>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}e.head&&(e.head.xflags=255&H,e.head.os=H>>8),512&e.flags&&(ea[0]=255&H,ea[1]=255&H>>>8,e.check=p(e.check,ea,2,0)),H=0,I=0,e.mode=5;case 5:if(1024&e.flags){for(;16>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}e.length=H,e.head&&(e.head.extra_len=H),512&e.flags&&(ea[0]=255&H,ea[1]=255&H>>>8,e.check=p(e.check,ea,2,0)),H=0,I=0}else e.head&&(e.head.extra=null);e.mode=6;case 6:if(1024&e.flags&&((L=e.length)>F&&(L=F),L&&(e.head&&($=e.head.extra_len-e.length,e.head.extra||(e.head.extra=Array(e.head.extra_len)),Ea(e.head.extra,q,D,L,$)),512&e.flags&&(e.check=p(e.check,q,L,D)),F-=L,D+=L,e.length-=L),e.length))break t;e.length=0,e.mode=7;case 7:if(2048&e.flags){if(0===F)break t;L=0;do $=q[D+L++],e.head&&$&&65536>e.length&&(e.head.name+=String.fromCharCode($));while($&&L<F);if(512&e.flags&&(e.check=p(e.check,q,L,D)),F-=L,D+=L,$)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=8;case 8:if(4096&e.flags){if(0===F)break t;L=0;do $=q[D+L++],e.head&&$&&65536>e.length&&(e.head.comment+=String.fromCharCode($));while($&&L<F);if(512&e.flags&&(e.check=p(e.check,q,L,D)),F-=L,D+=L,$)break t}else e.head&&(e.head.comment=null);e.mode=9;case 9:if(512&e.flags){for(;16>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(H!==(65535&e.check)){j.msg=\"header crc mismatch\",e.mode=30;break}H=0,I=0}e.head&&(e.head.hcrc=1&e.flags>>9,e.head.done=!0),j.adler=e.check=0,e.mode=12;break;case 10:for(;32>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}j.adler=e.check=u(H),H=0,I=0,e.mode=11;case 11:if(0===e.havedict)return j.next_out=E,j.avail_out=G,j.next_in=D,j.avail_in=F,e.hold=H,e.bits=I,2;j.adler=e.check=1,e.mode=12;case 12:if(5===l||6===l)break t;case 13:if(e.last){H>>>=7&I,I-=7&I,e.mode=27;break}for(;3>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}switch(e.last=1&H,I-=1,3&(H>>>=1)){case 0:e.mode=14;break;case 1:if(s(e),e.mode=20,6===l){H>>>=2,I-=2;break t}break;case 2:e.mode=17;break;case 3:j.msg=\"invalid block type\",e.mode=30;}H>>>=2,I-=2;break;case 14:for(H>>>=7&I,I-=7&I;32>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if((65535&H)!=(65535^H>>>16)){j.msg=\"invalid stored block lengths\",e.mode=30;break}if(e.length=65535&H,H=0,I=0,e.mode=15,6===l)break t;case 15:e.mode=16;case 16:if(L=e.length){if(L>F&&(L=F),L>G&&(L=G),0===L)break t;Ea(t,q,D,L,E),F-=L,D+=L,G-=L,E+=L,e.length-=L;break}e.mode=12;break;case 17:for(;14>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(e.nlen=257+(31&H),H>>>=5,I-=5,e.ndist=1+(31&H),H>>>=5,I-=5,e.ncode=4+(15&H),H>>>=4,I-=4,286<e.nlen||30<e.ndist){j.msg=\"too many length or distance symbols\",e.mode=30;break}e.have=0,e.mode=18;case 18:for(;e.have<e.ncode;){for(;3>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}e.lens[T[e.have++]]=7&H,H>>>=3,I-=3}for(;19>e.have;)e.lens[T[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,ba={bits:e.lenbits},aa=k(0,e.lens,0,19,e.lencode,0,e.work,ba),e.lenbits=ba.bits,aa){j.msg=\"invalid code lengths set\",e.mode=30;break}e.have=0,e.mode=19;case 19:for(;e.have<e.nlen+e.ndist;){for(;S=255&(da=e.lencode[H&(1<<e.lenbits)-1])>>>16,V=65535&da,!((Q=da>>>24)<=I);){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(16>V)H>>>=Q,I-=Q,e.lens[e.have++]=V;else{if(16===V){for(ca=Q+2;I<ca;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(H>>>=Q,I-=Q,0===e.have){j.msg=\"invalid bit length repeat\",e.mode=30;break}$=e.lens[e.have-1],L=3+(3&H),H>>>=2,I-=2}else if(17===V){for(ca=Q+3;I<ca;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}I-=Q,$=0,L=3+(7&(H>>>=Q)),H>>>=3,I-=3}else{for(ca=Q+7;I<ca;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}I-=Q,$=0,L=11+(127&(H>>>=Q)),H>>>=7,I-=7}if(e.have+L>e.nlen+e.ndist){j.msg=\"invalid bit length repeat\",e.mode=30;break}for(;L--;)e.lens[e.have++]=$}}if(30===e.mode)break;if(0===e.lens[256]){j.msg=\"invalid code -- missing end-of-block\",e.mode=30;break}if(e.lenbits=9,ba={bits:e.lenbits},aa=k(1,e.lens,0,e.nlen,e.lencode,0,e.work,ba),e.lenbits=ba.bits,aa){j.msg=\"invalid literal/lengths set\",e.mode=30;break}if(e.distbits=6,e.distcode=e.distdyn,ba={bits:e.distbits},aa=k(2,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,ba),e.distbits=ba.bits,aa){j.msg=\"invalid distances set\",e.mode=30;break}if(e.mode=20,6===l)break t;case 20:e.mode=21;case 21:if(6<=F&&258<=G){j.next_out=E,j.avail_out=G,j.next_in=D,j.avail_in=F,e.hold=H,e.bits=I,i(j,K),E=j.next_out,t=j.output,G=j.avail_out,D=j.next_in,q=j.input,F=j.avail_in,H=e.hold,I=e.bits,12===e.mode&&(e.back=-1);break}for(e.back=0;S=255&(da=e.lencode[H&(1<<e.lenbits)-1])>>>16,V=65535&da,!((Q=da>>>24)<=I);){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(S&&0==(240&S)){for(W=Q,X=S,Y=V;S=255&(da=e.lencode[Y+((H&(1<<W+X)-1)>>W)])>>>16,V=65535&da,!(W+(Q=da>>>24)<=I);){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}H>>>=W,I-=W,e.back+=W}if(H>>>=Q,I-=Q,e.back+=Q,e.length=V,0===S){e.mode=26;break}if(32&S){e.back=-1,e.mode=12;break}if(64&S){j.msg=\"invalid literal/length code\",e.mode=30;break}e.extra=15&S,e.mode=22;case 22:if(e.extra){for(ca=e.extra;I<ca;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}e.length+=H&(1<<e.extra)-1,H>>>=e.extra,I-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=23;case 23:for(;S=255&(da=e.distcode[H&(1<<e.distbits)-1])>>>16,V=65535&da,!((Q=da>>>24)<=I);){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(0==(240&S)){for(W=Q,X=S,Y=V;S=255&(da=e.distcode[Y+((H&(1<<W+X)-1)>>W)])>>>16,V=65535&da,!(W+(Q=da>>>24)<=I);){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}H>>>=W,I-=W,e.back+=W}if(H>>>=Q,I-=Q,e.back+=Q,64&S){j.msg=\"invalid distance code\",e.mode=30;break}e.offset=V,e.extra=15&S,e.mode=24;case 24:if(e.extra){for(ca=e.extra;I<ca;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}e.offset+=H&(1<<e.extra)-1,H>>>=e.extra,I-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){j.msg=\"invalid distance too far back\",e.mode=30;break}e.mode=25;case 25:if(0===G)break t;if(L=K-G,e.offset>L){if((L=e.offset-L)>e.whave&&e.sane){j.msg=\"invalid distance too far back\",e.mode=30;break}L>e.wnext?(L-=e.wnext,M=e.wsize-L):M=e.wnext-L,L>e.length&&(L=e.length),P=e.window}else P=t,M=E-e.offset,L=e.length;L>G&&(L=G),G-=L,e.length-=L;do t[E++]=P[M++];while(--L);0===e.length&&(e.mode=21);break;case 26:if(0===G)break t;t[E++]=e.length,G--,e.mode=21;break;case 27:if(e.wrap){for(;32>I;){if(0===F)break t;F--,H|=q[D++]<<I,I+=8}if(K-=G,j.total_out+=K,e.total+=K,K&&(j.adler=e.check=e.flags?p(e.check,t,K,E-K):o(e.check,t,K,E-K)),K=G,(e.flags?H:u(H))!==e.check){j.msg=\"incorrect data check\",e.mode=30;break}H=0,I=0}e.mode=28;case 28:if(e.wrap&&e.flags){for(;32>I;){if(0===F)break t;F--,H+=q[D++]<<I,I+=8}if(H!==(4294967295&e.total)){j.msg=\"incorrect length check\",e.mode=30;break}H=0,I=0}e.mode=29;case 29:aa=1;break t;case 30:aa=-3;break t;case 31:return-4;case 32:default:return-2;}return j.next_out=E,j.avail_out=G,j.next_in=D,j.avail_in=F,e.hold=H,e.bits=I,(e.wsize||K!==j.avail_out&&30>e.mode&&(27>e.mode||4!==l))&&y(j,j.output,j.next_out,K-j.avail_out),J-=j.avail_in,K-=j.avail_out,j.total_in+=J,j.total_out+=K,e.total+=K,e.wrap&&K&&(j.adler=e.check=e.flags?p(e.check,t,K,j.next_out-K):o(e.check,t,K,j.next_out-K)),j.data_type=e.bits+(e.last?64:0)+(12===e.mode?128:0)+(20===e.mode||15===e.mode?256:0),(0===J&&0===K||4===l)&&0===aa&&(aa=-5),aa}function w(b,c){var d,e=c.length;return b&&b.state?0!==(d=b.state).wrap&&11!==d.mode?-2:11===d.mode&&o(1,c,e,0)!==d.check?-3:y(b,c,e,e)?(d.mode=31,-4):(d.havedict=1,0):-2}function j(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=\"\",this.state=null,this.data_type=2,this.adler=0}function C(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=\"\",this.comment=\"\",this.hcrc=0,this.done=!1}function D(b,c){var d=new P(c);if(d.push(b,!0),d.err)throw d.msg||Oa[d.err];return d.result}function E(a){for(var b=a.length;0<=--b;)a[b]=0}function I(b,c,d,a,e){this.static_tree=b,this.extra_bits=c,this.extra_base=d,this.elems=a,this.max_length=e,this.has_stree=b&&b.length}function K(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b}function L(a){return 256>a?Qa[a]:Qa[256+(a>>>7)]}function M(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=255&b>>>8}function N(b,c,d){b.bi_valid>16-d?(b.bi_buf|=65535&c<<b.bi_valid,M(b,b.bi_buf),b.bi_buf=c>>16-b.bi_valid,b.bi_valid+=d-16):(b.bi_buf|=65535&c<<b.bi_valid,b.bi_valid+=d)}function R(b,c,d){N(b,d[2*c],d[2*c+1])}function S(b,c){var d=0;do d|=1&b,b>>>=1,d<<=1;while(0<--c);return d>>>1}function X(b,c,d){var a,e,f=Array(16),g=0;for(a=1;15>=a;a++)f[a]=g=g+d[a-1]<<1;for(e=0;e<=c;e++){var h=b[2*e+1];0!==h&&(b[2*e]=S(f[h]++,h))}}function Y(a){var b;for(b=0;286>b;b++)a.dyn_ltree[2*b]=0;for(b=0;30>b;b++)a.dyn_dtree[2*b]=0;for(b=0;19>b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[512]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function Z(a){8<a.bi_valid?M(a,a.bi_buf):0<a.bi_valid&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function _(b,c,d,a){var e=2*c,f=2*d;return b[e]<b[f]||b[e]===b[f]&&a[c]<=a[d]}function aa(b,c,d){for(var e=b.heap[d],f=d<<1;f<=b.heap_len&&(f<b.heap_len&&_(c,b.heap[f+1],b.heap[f],b.depth)&&f++,!_(c,e,b.heap[f],b.depth));)b.heap[d]=b.heap[f],d=f,f<<=1;b.heap[d]=e}function ba(b,c,d){var a,e,f,g,h=0;if(0!==b.last_lit)do a=b.pending_buf[b.d_buf+2*h]<<8|b.pending_buf[b.d_buf+2*h+1],e=b.pending_buf[b.l_buf+h],h++,0===a?R(b,e,c):(R(b,(f=Ra[e])+256+1,c),0!==(g=Xa[f])&&N(b,e-=Sa[f],g),R(b,f=L(--a),d),0!==(g=Ya[f])&&N(b,a-=Ta[f],g));while(h<b.last_lit);R(b,256,c)}function ca(b,c){var d,e,f,g=c.dyn_tree,j=c.stat_desc.static_tree,k=c.stat_desc.has_stree,m=c.stat_desc.elems,h=-1;for(b.heap_len=0,b.heap_max=573,d=0;d<m;d++)0===g[2*d]?g[2*d+1]=0:(b.heap[++b.heap_len]=h=d,b.depth[d]=0);for(;2>b.heap_len;)g[2*(f=b.heap[++b.heap_len]=2>h?++h:0)]=1,b.depth[f]=0,b.opt_len--,k&&(b.static_len-=j[2*f+1]);for(c.max_code=h,d=b.heap_len>>1;1<=d;d--)aa(b,g,d);f=m;do d=b.heap[1],b.heap[1]=b.heap[b.heap_len--],aa(b,g,1),e=b.heap[1],b.heap[--b.heap_max]=d,b.heap[--b.heap_max]=e,g[2*f]=g[2*d]+g[2*e],b.depth[f]=(b.depth[d]>=b.depth[e]?b.depth[d]:b.depth[e])+1,g[2*d+1]=g[2*e+1]=f,b.heap[1]=f++,aa(b,g,1);while(2<=b.heap_len);b.heap[--b.heap_max]=b.heap[1],function(b,j){var e,k,m,p,q,t,v=j.dyn_tree,h=j.max_code,l=j.stat_desc.static_tree,d=j.stat_desc.has_stree,w=j.stat_desc.extra_bits,f=j.stat_desc.extra_base,u=j.stat_desc.max_length,c=0;for(p=0;15>=p;p++)b.bl_count[p]=0;for(v[2*b.heap[b.heap_max]+1]=0,e=b.heap_max+1;573>e;e++)(p=v[2*v[2*(k=b.heap[e])+1]+1]+1)>u&&(p=u,c++),v[2*k+1]=p,k>h||(b.bl_count[p]++,q=0,k>=f&&(q=w[k-f]),t=v[2*k],b.opt_len+=t*(p+q),d&&(b.static_len+=t*(l[2*k+1]+q)));if(0!=c){do{for(p=u-1;0===b.bl_count[p];)p--;b.bl_count[p]--,b.bl_count[p+1]+=2,b.bl_count[u]--,c-=2}while(0<c);for(p=u;0!==p;p--)for(k=b.bl_count[p];0!==k;)(m=b.heap[--e])>h||(v[2*m+1]!==p&&(b.opt_len+=(p-v[2*m+1])*v[2*m],v[2*m+1]=p),k--)}}(b,c),X(g,h,b.bl_count)}function da(b,c,d){var a,e,f=-1,g=c[1],j=0,k=7,m=4;for(0===g&&(k=138,m=3),c[2*(d+1)+1]=65535,a=0;a<=d;a++)e=g,g=c[2*(a+1)+1],++j<k&&e===g||(j<m?b.bl_tree[2*e]+=j:0===e?10>=j?b.bl_tree[34]++:b.bl_tree[36]++:(e!==f&&b.bl_tree[2*e]++,b.bl_tree[32]++),j=0,f=e,0===g?(k=138,m=3):e===g?(k=6,m=3):(k=7,m=4))}function ea(b,c,d){var a,e,f=-1,g=c[1],j=0,k=7,m=4;for(0===g&&(k=138,m=3),a=0;a<=d;a++)if(e=g,g=c[2*(a+1)+1],!(++j<k&&e===g)){if(j<m)do R(b,e,b.bl_tree);while(0!=--j);else 0===e?10>=j?(R(b,17,b.bl_tree),N(b,j-3,3)):(R(b,18,b.bl_tree),N(b,j-11,7)):(e!==f&&(R(b,e,b.bl_tree),j--),R(b,16,b.bl_tree),N(b,j-3,2));j=0,f=e,0===g?(k=138,m=3):e===g?(k=6,m=3):(k=7,m=4)}}function fa(a){_a||(!function(){var b,c,d,f,g,h=Array(16);for(E(H=Array(576)),E(Pa=Array(60)),E(Qa=Array(512)),E(Ra=Array(256)),E(Sa=Array(29)),E(Ta=Array(30)),d=0,f=0;28>f;f++)for(Sa[f]=d,b=0;b<1<<Xa[f];b++)Ra[d++]=f;for(Ra[d-1]=f,g=0,f=0;16>f;f++)for(Ta[f]=g,b=0;b<1<<Ya[f];b++)Qa[g++]=f;for(g>>=7;30>f;f++)for(Ta[f]=g<<7,b=0;b<1<<Ya[f]-7;b++)Qa[256+g++]=f;for(c=0;15>=c;c++)h[c]=0;for(b=0;143>=b;)H[2*b+1]=8,b++,h[8]++;for(;255>=b;)H[2*b+1]=9,b++,h[9]++;for(;279>=b;)H[2*b+1]=7,b++,h[7]++;for(;287>=b;)H[2*b+1]=8,b++,h[8]++;for(X(H,287,h),b=0;30>b;b++)Pa[2*b+1]=5,Pa[2*b]=S(b,5);Ua=new I(H,Xa,257,286,15),Va=new I(Pa,Ya,0,30,15),Wa=new I([],Za,0,19,7)}(),_a=!0),a.l_desc=new K(a.dyn_ltree,Ua),a.d_desc=new K(a.dyn_dtree,Va),a.bl_desc=new K(a.bl_tree,Wa),a.bi_buf=0,a.bi_valid=0,Y(a)}function ga(b,c,d,a){N(b,0+(a?1:0),3),function(b,c,d,a){Z(b),a&&(M(b,d),M(b,~d)),Ea(b.pending_buf,b.window,c,d,b.pending),b.pending+=d}(b,c,d,!0)}function ha(a){N(a,2,3),R(a,256,H),function(a){16===a.bi_valid?(M(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):8<=a.bi_valid&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}(a)}function ia(b,c,d,a){var e,f,g=0;0<b.level?(2===b.strm.data_type&&(b.strm.data_type=function(b){var c,d=4093624447;for(c=0;31>=c;c++,d>>>=1)if(1&d&&0!==b.dyn_ltree[2*c])return 0;if(0!==b.dyn_ltree[18]||0!==b.dyn_ltree[20]||0!==b.dyn_ltree[26])return 1;for(c=32;256>c;c++)if(0!==b.dyn_ltree[2*c])return 1;return 0}(b)),ca(b,b.l_desc),ca(b,b.d_desc),g=function(a){var b;for(da(a,a.dyn_ltree,a.l_desc.max_code),da(a,a.dyn_dtree,a.d_desc.max_code),ca(a,a.bl_desc),b=18;3<=b&&0===a.bl_tree[2*$a[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}(b),e=b.opt_len+3+7>>>3,(f=b.static_len+3+7>>>3)<=e&&(e=f)):e=f=d+5,d+4<=e&&-1!==c?ga(b,c,d,a):4===b.strategy||f===e?(N(b,2+(a?1:0),3),ba(b,H,Pa)):(N(b,4+(a?1:0),3),function(b,c,d,a){var e;for(N(b,c-257,5),N(b,d-1,5),N(b,a-4,4),e=0;e<a;e++)N(b,b.bl_tree[2*$a[e]+1],3);ea(b,b.dyn_ltree,c-1),ea(b,b.dyn_dtree,d-1)}(b,b.l_desc.max_code+1,b.d_desc.max_code+1,g+1),ba(b,b.dyn_ltree,b.dyn_dtree)),Y(b),a&&Z(b)}function ja(b,c,d){return b.pending_buf[b.d_buf+2*b.last_lit]=255&c>>>8,b.pending_buf[b.d_buf+2*b.last_lit+1]=255&c,b.pending_buf[b.l_buf+b.last_lit]=255&d,b.last_lit++,0===c?b.dyn_ltree[2*d]++:(b.matches++,c--,b.dyn_ltree[2*(Ra[d]+256+1)]++,b.dyn_dtree[2*L(c)]++),b.last_lit===b.lit_bufsize-1}function ka(a,b){return a.msg=Oa[b],b}function la(a){return(a<<1)-(4<a?9:0)}function ma(a){for(var b=a.length;0<=--b;)a[b]=0}function na(b){var c=b.state,d=c.pending;d>b.avail_out&&(d=b.avail_out),0!==d&&(Ea(b.output,c.pending_buf,c.pending_out,d,b.next_out),b.next_out+=d,c.pending_out+=d,b.total_out+=d,b.avail_out-=d,c.pending-=d,0===c.pending&&(c.pending_out=0))}function oa(a,b){ia(a,0<=a.block_start?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,na(a.strm)}function pa(a,b){a.pending_buf[a.pending++]=b}function qa(a,b){a.pending_buf[a.pending++]=255&b>>>8,a.pending_buf[a.pending++]=255&b}function ra(b,g){var j,k,m=b.max_chain_length,p=b.strstart,q=b.prev_length,t=b.nice_match,v=b.strstart>b.w_size-262?b.strstart-(b.w_size-262):0,h=b.window,l=b.w_mask,d=b.prev,w=b.strstart+258,f=h[p+q-1],x=h[p+q];b.prev_length>=b.good_match&&(m>>=2),t>b.lookahead&&(t=b.lookahead);do if(h[(j=g)+q]===x&&h[j+q-1]===f&&h[j]===h[p]&&h[++j]===h[p+1]){p+=2,j++;do;while(h[++p]===h[++j]&&h[++p]===h[++j]&&h[++p]===h[++j]&&h[++p]===h[++j]&&h[++p]===h[++j]&&h[++p]===h[++j]&&h[++p]===h[++j]&&h[++p]===h[++j]&&p<w);if(k=258-(w-p),p=w-258,k>q){if(b.match_start=g,q=k,k>=t)break;f=h[p+q-1],x=h[p+q]}}while((g=d[g&l])>v&&0!=--m);return q<=b.lookahead?q:b.lookahead}function sa(b){var c,g,j,k,m,q,t,u,v,w,x=b.w_size;do{if(k=b.window_size-b.lookahead-b.strstart,b.strstart>=x+(x-262)){Ea(b.window,b.window,x,x,0),b.match_start-=x,b.strstart-=x,b.block_start-=x,c=g=b.hash_size;do j=b.head[--c],b.head[c]=j>=x?j-x:0;while(--g);c=g=x;do j=b.prev[--c],b.prev[c]=j>=x?j-x:0;while(--g);k+=x}if(0===b.strm.avail_in)break;if(q=b.strm,t=b.window,u=b.strstart+b.lookahead,v=k,w=void 0,(w=q.avail_in)>v&&(w=v),g=0===w?0:(q.avail_in-=w,Ea(t,q.input,q.next_in,w,u),1===q.state.wrap?q.adler=o(q.adler,t,w,u):2===q.state.wrap&&(q.adler=p(q.adler,t,w,u)),q.next_in+=w,q.total_in+=w,w),b.lookahead+=g,3<=b.lookahead+b.insert)for(m=b.strstart-b.insert,b.ins_h=b.window[m],b.ins_h=(b.ins_h<<b.hash_shift^b.window[m+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[m+3-1])&b.hash_mask,b.prev[m&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=m,m++,b.insert--,!(3>b.lookahead+b.insert)););}while(262>b.lookahead&&0!==b.strm.avail_in)}function ta(b,c){var d=65535;for(d>b.pending_buf_size-5&&(d=b.pending_buf_size-5);;){if(1>=b.lookahead){if(sa(b),0===b.lookahead&&0===c)return 1;if(0===b.lookahead)break}b.strstart+=b.lookahead,b.lookahead=0;var e=b.block_start+d;if((0===b.strstart||b.strstart>=e)&&(b.lookahead=b.strstart-e,b.strstart=e,oa(b,!1),0===b.strm.avail_out))return 1;if(b.strstart-b.block_start>=b.w_size-262&&(oa(b,!1),0===b.strm.avail_out))return 1}return b.insert=0,4===c?(oa(b,!0),0===b.strm.avail_out?3:4):(b.strstart>b.block_start&&(oa(b,!1),b.strm.avail_out),1)}function ua(b,c){for(var d,e;;){if(262>b.lookahead){if(sa(b),262>b.lookahead&&0===c)return 1;if(0===b.lookahead)break}if(d=0,3<=b.lookahead&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+3-1])&b.hash_mask,d=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),0!==d&&b.strstart-d<=b.w_size-262&&(b.match_length=ra(b,d)),!(3<=b.match_length))e=ja(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;else if(e=ja(b,b.strstart-b.match_start,b.match_length-3),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&3<=b.lookahead){b.match_length--;do b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+3-1])&b.hash_mask,d=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart;while(0!=--b.match_length);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;if(e&&(oa(b,!1),0===b.strm.avail_out))return 1}return b.insert=2>b.strstart?b.strstart:2,4===c?(oa(b,!0),0===b.strm.avail_out?3:4):b.last_lit&&(oa(b,!1),0===b.strm.avail_out)?1:2}function va(b,c){for(var d,e,f;;){if(262>b.lookahead){if(sa(b),262>b.lookahead&&0===c)return 1;if(0===b.lookahead)break}if(d=0,3<=b.lookahead&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+3-1])&b.hash_mask,d=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=2,0!==d&&b.prev_length<b.max_lazy_match&&b.strstart-d<=b.w_size-262&&(b.match_length=ra(b,d),5>=b.match_length&&(1===b.strategy||3===b.match_length&&4096<b.strstart-b.match_start)&&(b.match_length=2)),3<=b.prev_length&&b.match_length<=b.prev_length){f=b.strstart+b.lookahead-3,e=ja(b,b.strstart-1-b.prev_match,b.prev_length-3),b.lookahead-=b.prev_length-1,b.prev_length-=2;do++b.strstart<=f&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+3-1])&b.hash_mask,d=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart);while(0!=--b.prev_length);if(b.match_available=0,b.match_length=2,b.strstart++,e&&(oa(b,!1),0===b.strm.avail_out))return 1}else if(!b.match_available)b.match_available=1,b.strstart++,b.lookahead--;else if((e=ja(b,0,b.window[b.strstart-1]))&&oa(b,!1),b.strstart++,b.lookahead--,0===b.strm.avail_out)return 1}return b.match_available&&(e=ja(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=2>b.strstart?b.strstart:2,4===c?(oa(b,!0),0===b.strm.avail_out?3:4):b.last_lit&&(oa(b,!1),0===b.strm.avail_out)?1:2}function wa(b,c,d,a,e){this.good_length=b,this.max_lazy=c,this.nice_length=d,this.max_chain=a,this.func=e}function xa(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=8,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=Ha(1146),this.dyn_dtree=Ha(122),this.bl_tree=Ha(78),ma(this.dyn_ltree),ma(this.dyn_dtree),ma(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=Ha(16),this.heap=Ha(573),ma(this.heap),this.heap_len=0,this.heap_max=0,this.depth=Ha(573),ma(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ya(a){var b=function(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=2,(b=a.state).pending=0,b.pending_out=0,0>b.wrap&&(b.wrap=-b.wrap),b.status=b.wrap?42:113,a.adler=2===b.wrap?0:1,b.last_flush=0,fa(b),0):ka(a,-2)}(a);return 0===b&&function(a){a.window_size=2*a.w_size,ma(a.head);var b=ab();a.max_lazy_match=b[a.level].max_lazy,a.good_match=b[a.level].good_length,a.nice_match=b[a.level].nice_length,a.max_chain_length=b[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0}(a.state),b}function za(b,c){var d,e,f,g;if(!b||!b.state||5<c||0>c)return b?ka(b,-2):-2;if(e=b.state,!b.output||!b.input&&0!==b.avail_in||666===e.status&&4!==c)return ka(b,0===b.avail_out?-5:-2);if(e.strm=b,d=e.last_flush,e.last_flush=c,42===e.status)if(2===e.wrap)b.adler=0,pa(e,31),pa(e,139),pa(e,8),e.gzhead?(pa(e,(e.gzhead.text?1:0)+(e.gzhead.hcrc?2:0)+(e.gzhead.extra?4:0)+(e.gzhead.name?8:0)+(e.gzhead.comment?16:0)),pa(e,255&e.gzhead.time),pa(e,255&e.gzhead.time>>8),pa(e,255&e.gzhead.time>>16),pa(e,255&e.gzhead.time>>24),pa(e,9===e.level?2:2<=e.strategy||2>e.level?4:0),pa(e,255&e.gzhead.os),e.gzhead.extra&&e.gzhead.extra.length&&(pa(e,255&e.gzhead.extra.length),pa(e,255&e.gzhead.extra.length>>8)),e.gzhead.hcrc&&(b.adler=p(b.adler,e.pending_buf,e.pending,0)),e.gzindex=0,e.status=69):(pa(e,0),pa(e,0),pa(e,0),pa(e,0),pa(e,0),pa(e,9===e.level?2:2<=e.strategy||2>e.level?4:0),pa(e,3),e.status=113);else{var h=8+(e.w_bits-8<<4)<<8;h|=(2<=e.strategy||2>e.level?0:6>e.level?1:6===e.level?2:3)<<6,0!==e.strstart&&(h|=32),h+=31-h%31,e.status=113,qa(e,h),0!==e.strstart&&(qa(e,b.adler>>>16),qa(e,65535&b.adler)),b.adler=1}if(69===e.status)if(e.gzhead.extra){for(f=e.pending;e.gzindex<(65535&e.gzhead.extra.length)&&(e.pending!==e.pending_buf_size||(e.gzhead.hcrc&&e.pending>f&&(b.adler=p(b.adler,e.pending_buf,e.pending-f,f)),na(b),f=e.pending,e.pending!==e.pending_buf_size));)pa(e,255&e.gzhead.extra[e.gzindex]),e.gzindex++;e.gzhead.hcrc&&e.pending>f&&(b.adler=p(b.adler,e.pending_buf,e.pending-f,f)),e.gzindex===e.gzhead.extra.length&&(e.gzindex=0,e.status=73)}else e.status=73;if(73===e.status)if(e.gzhead.name){f=e.pending;do{if(e.pending===e.pending_buf_size&&(e.gzhead.hcrc&&e.pending>f&&(b.adler=p(b.adler,e.pending_buf,e.pending-f,f)),na(b),f=e.pending,e.pending===e.pending_buf_size)){g=1;break}g=e.gzindex<e.gzhead.name.length?255&e.gzhead.name.charCodeAt(e.gzindex++):0,pa(e,g)}while(0!==g);e.gzhead.hcrc&&e.pending>f&&(b.adler=p(b.adler,e.pending_buf,e.pending-f,f)),0===g&&(e.gzindex=0,e.status=91)}else e.status=91;if(91===e.status)if(e.gzhead.comment){f=e.pending;do{if(e.pending===e.pending_buf_size&&(e.gzhead.hcrc&&e.pending>f&&(b.adler=p(b.adler,e.pending_buf,e.pending-f,f)),na(b),f=e.pending,e.pending===e.pending_buf_size)){g=1;break}g=e.gzindex<e.gzhead.comment.length?255&e.gzhead.comment.charCodeAt(e.gzindex++):0,pa(e,g)}while(0!==g);e.gzhead.hcrc&&e.pending>f&&(b.adler=p(b.adler,e.pending_buf,e.pending-f,f)),0===g&&(e.status=103)}else e.status=103;if(103===e.status&&(e.gzhead.hcrc?(e.pending+2>e.pending_buf_size&&na(b),e.pending+2<=e.pending_buf_size&&(pa(e,255&b.adler),pa(e,255&b.adler>>8),b.adler=0,e.status=113)):e.status=113),0!==e.pending){if(na(b),0===b.avail_out)return e.last_flush=-1,0;}else if(0===b.avail_in&&la(c)<=la(d)&&4!==c)return ka(b,-5);if(666===e.status&&0!==b.avail_in)return ka(b,-5);if(0!==b.avail_in||0!==e.lookahead||0!==c&&666!==e.status){var j=2===e.strategy?function(b,c){for(var d;;){if(0===b.lookahead&&(sa(b),0===b.lookahead)){if(0===c)return 1;break}if(b.match_length=0,d=ja(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++,d&&(oa(b,!1),0===b.strm.avail_out))return 1}return b.insert=0,4===c?(oa(b,!0),0===b.strm.avail_out?3:4):b.last_lit&&(oa(b,!1),0===b.strm.avail_out)?1:2}(e,c):3===e.strategy?function(b,c){for(var d,e,f,g,h=b.window;;){if(258>=b.lookahead){if(sa(b),258>=b.lookahead&&0===c)return 1;if(0===b.lookahead)break}if(b.match_length=0,3<=b.lookahead&&0<b.strstart&&(e=h[f=b.strstart-1])===h[++f]&&e===h[++f]&&e===h[++f]){g=b.strstart+258;do;while(e===h[++f]&&e===h[++f]&&e===h[++f]&&e===h[++f]&&e===h[++f]&&e===h[++f]&&e===h[++f]&&e===h[++f]&&f<g);b.match_length=258-(g-f),b.match_length>b.lookahead&&(b.match_length=b.lookahead)}if(3<=b.match_length?(d=ja(b,1,b.match_length-3),b.lookahead-=b.match_length,b.strstart+=b.match_length,b.match_length=0):(d=ja(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++),d&&(oa(b,!1),0===b.strm.avail_out))return 1}return b.insert=0,4===c?(oa(b,!0),0===b.strm.avail_out?3:4):b.last_lit&&(oa(b,!1),0===b.strm.avail_out)?1:2}(e,c):ab()[e.level].func(e,c);if(3!==j&&4!==j||(e.status=666),1===j||3===j)return 0===b.avail_out&&(e.last_flush=-1),0;if(2===j&&(1===c?ha(e):5!=c&&(ga(e,0,0,!1),3==c&&(ma(e.head),0===e.lookahead&&(e.strstart=0,e.block_start=0,e.insert=0))),na(b),0===b.avail_out))return e.last_flush=-1,0}return 4===c?0>=e.wrap?1:(2===e.wrap?(pa(e,255&b.adler),pa(e,255&b.adler>>8),pa(e,255&b.adler>>16),pa(e,255&b.adler>>24),pa(e,255&b.total_in),pa(e,255&b.total_in>>8),pa(e,255&b.total_in>>16),pa(e,255&b.total_in>>24)):(qa(e,b.adler>>>16),qa(e,65535&b.adler)),na(b),0<e.wrap&&(e.wrap=-e.wrap),0===e.pending?1:0):0}function Aa(b,c){var d=new cb(c);if(d.push(b,!0),d.err)throw d.msg||Oa[d.err];return d.result}var Ba,Ca,Da={arraySet:function arraySet(b,c,d,a,e){if(c.subarray&&b.subarray)b.set(c.subarray(d,d+a),e);else for(var f=0;f<a;f++)b[e+f]=c[d+f]},flattenChunks:function flattenChunks(b){var c,d,f,g,h,j;for(f=0,c=0,d=b.length;c<d;c++)f+=b[c].length;for(j=new Uint8Array(f),g=0,c=0,d=b.length;c<d;c++)h=b[c],j.set(h,g),g+=h.length;return j},Buf8:function Buf8(a){return new Uint8Array(a)},Buf16:function Buf16(a){return new Uint16Array(a)},Buf32:function Buf32(a){return new Int32Array(a)}},n={arraySet:function arraySet(b,c,d,a,e){for(var f=0;f<a;f++)b[e+f]=c[d+f]},flattenChunks:function flattenChunks(a){return[].concat.apply([],a)},Buf8:function Buf8(a){return Array(a)},Buf16:function Buf16(a){return Array(a)},Buf32:function Buf32(a){return Array(a)}},r=function s(){var a=\"undefined\"!=typeof Uint8Array&&\"undefined\"!=typeof Uint16Array&&\"undefined\"!=typeof Int32Array;return r=function s(){return a},a},Ea=function o(b,c,d,a,e){return(Ea=r()?Da.arraySet:n.arraySet)(b,c,d,a,e)},Fa=function h(a){return(Fa=r()?Da.flattenChunks:n.flattenChunks)(a)},Ga=function l(a){return(Ga=r()?Da.Buf8:n.Buf8)(a)},Ha=function d(a){return(Ha=r()?Da.Buf16:n.Buf16)(a)},Ia=function _(a){return(Ia=r()?Da.Buf32:n.Buf32)(a)},Ja=function f(){var a=!0;try{String.fromCharCode.apply(null,[0])}catch(b){a=!1}return Ja=function f(){return a},a},Ka=function u(){var a=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(b){a=!1}return Ka=function u(){return a},a},La=function c(b){for(var c=Ga(256),d=0;256>d;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;return c[254]=c[254]=1,La=function c(a){return c[a]},c[b]},Ma=function v(){var a=function(){for(var b,c=[],d=0;256>d;d++){b=d;for(var e=0;8>e;e++)b=1&b?3988292384^b>>>1:b>>>1;c[d]=b}return c}();return Ma=function v(){return a},a},Na=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],x=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],z=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],A=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],B=!0,Oa={2:\"need dictionary\",1:\"stream end\",0:\"\",\"-1\":\"file error\",\"-2\":\"stream error\",\"-3\":\"data error\",\"-4\":\"insufficient memory\",\"-5\":\"buffer error\",\"-6\":\"incompatible version\"},F=Object.prototype.toString,P=function b(c){if(!(this instanceof b))return new b(c);this.options=f({chunkSize:16384,windowBits:0,to:\"\"},c||{});var d=this.options;d.raw&&0<=d.windowBits&&16>d.windowBits&&(d.windowBits=-d.windowBits,0===d.windowBits&&(d.windowBits=-15)),!(0<=d.windowBits&&16>d.windowBits)||c&&c.windowBits||(d.windowBits+=32),15<d.windowBits&&48>d.windowBits&&0==(15&d.windowBits)&&(d.windowBits|=15),this.err=0,this.msg=\"\",this.ended=!1,this.chunks=[],this.strm=new j,this.strm.avail_out=0;var e,g,h,i=a(this.strm,d.windowBits);if(0!==i)throw new Error(Oa[i]);if(this.header=new C,e=this.strm,g=this.header,e&&e.state&&(0==(2&(h=e.state).wrap)||(h.head=g,g.done=!1)),d.dictionary&&(\"string\"==typeof d.dictionary?d.dictionary=v(d.dictionary):\"[object ArrayBuffer]\"===F.call(d.dictionary)&&(d.dictionary=new Uint8Array(d.dictionary)),d.raw&&0!==(i=w(this.strm,d.dictionary))))throw new Error(Oa[i])};P.prototype.push=function(g,i){var j,k,m,o,p,q,x=this.strm,y=this.options.chunkSize,f=this.options.dictionary,u=!1;if(this.ended)return!1;k=i===~~i?i:!0===i?4:0,x.input=\"string\"==typeof g?function(b){for(var c=new Uint8Array(b.length),d=0,e=c.length;d<e;d++)c[d]=b.charCodeAt(d);return c}(g):\"[object ArrayBuffer]\"===F.call(g)?new Uint8Array(g):g,x.next_in=0,x.avail_in=x.input.length;do{if(0===x.avail_out&&(x.output=Ga(y),x.next_out=0,x.avail_out=y),2===(j=t(x,0))&&f&&(q=\"string\"==typeof f?v(f):\"[object ArrayBuffer]\"===F.call(f)?new Uint8Array(f):f,j=w(this.strm,q)),-5===j&&!0===u&&(j=0,u=!1),1!==j&&0!==j)return this.onEnd(j),this.ended=!0,!1;x.next_out&&(0!==x.avail_out&&1!==j&&(0!==x.avail_in||4!==k&&2!==k)||(\"string\"===this.options.to?(m=b(x.output,x.next_out),o=x.next_out-m,p=e(x.output,m),x.next_out=o,x.avail_out=y-o,o&&Ea(x.output,x.output,m,o,0),this.onData(p)):this.onData(l(x.output,x.next_out)))),0===x.avail_in&&0===x.avail_out&&(u=!0)}while((0<x.avail_in||0===x.avail_out)&&1!==j);return 1===j&&(k=4),4===k?(j=function(a){if(!a||!a.state)return-2;var b=a.state;return b.window&&(b.window=null),a.state=null,0}(this.strm),this.onEnd(j),this.ended=!0,0===j):2!=k||(this.onEnd(0),x.avail_out=0,!0)},P.prototype.onData=function(a){this.chunks.push(a)},P.prototype.onEnd=function(a){0===a&&(\"string\"===this.options.to?this.result=this.chunks.join(\"\"):this.result=Fa(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg};var H,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ya=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Za=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],$a=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],_a=!1,ab=function Mt(){var a=[new wa(0,0,0,0,ta),new wa(4,4,8,4,ua),new wa(4,5,16,8,ua),new wa(4,6,32,32,ua),new wa(4,4,16,16,va),new wa(8,16,32,32,va),new wa(8,16,128,128,va),new wa(8,32,128,256,va),new wa(32,128,258,1024,va),new wa(32,258,258,4096,va)];return ab=function Mt(){return a},a},bb=Object.prototype.toString,cb=function(a){this.options=f({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:\"\"},a||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&16>b.windowBits&&(b.windowBits+=16),this.err=0,this.msg=\"\",this.ended=!1,this.chunks=[],this.strm=new j,this.strm.avail_out=0;var c,d,e=function(b,c,d,a,f,g){if(!b)return-2;var h=1;if(-1===c&&(c=6),0>a?(h=0,a=-a):15<a&&(h=2,a-=16),1>f||9<f||8!==d||8>a||15<a||0>c||9<c||0>g||4<g)return ka(b,-2);8===a&&(a=9);var j=new xa;return b.state=j,j.strm=b,j.wrap=h,j.gzhead=null,j.w_bits=a,j.w_size=1<<j.w_bits,j.w_mask=j.w_size-1,j.hash_bits=f+7,j.hash_size=1<<j.hash_bits,j.hash_mask=j.hash_size-1,j.hash_shift=~~((j.hash_bits+3-1)/3),j.window=Ga(2*j.w_size),j.head=Ha(j.hash_size),j.prev=Ha(j.w_size),j.lit_bufsize=1<<f+6,j.pending_buf_size=4*j.lit_bufsize,j.pending_buf=Ga(j.pending_buf_size),j.d_buf=1*j.lit_bufsize,j.l_buf=3*j.lit_bufsize,j.level=c,j.strategy=g,j.method=d,ya(b)}(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(0!==e)throw new Error(Oa[e]);if(b.header&&(c=this.strm,d=b.header,c&&c.state&&(2!==c.state.wrap||(c.state.gzhead=d))),b.dictionary){var g;if(g=\"string\"==typeof b.dictionary?v(b.dictionary):\"[object ArrayBuffer]\"===bb.call(b.dictionary)?new Uint8Array(b.dictionary):b.dictionary,0!==(e=function(b,c){var g,j,k,l,m,p,q,t,u=c.length;if(!b||!b.state)return-2;if(2===(l=(g=b.state).wrap)||1===l&&42!==g.status||g.lookahead)return-2;for(1===l&&(b.adler=o(b.adler,c,u,0)),g.wrap=0,u>=g.w_size&&(0===l&&(ma(g.head),g.strstart=0,g.block_start=0,g.insert=0),t=Ga(g.w_size),Ea(t,c,u-g.w_size,g.w_size,0),c=t,u=g.w_size),m=b.avail_in,p=b.next_in,q=b.input,b.avail_in=u,b.next_in=0,b.input=c,sa(g);3<=g.lookahead;){j=g.strstart,k=g.lookahead-2;do g.ins_h=(g.ins_h<<g.hash_shift^g.window[j+3-1])&g.hash_mask,g.prev[j&g.w_mask]=g.head[g.ins_h],g.head[g.ins_h]=j,j++;while(--k);g.strstart=j,g.lookahead=2,sa(g)}return g.strstart+=g.lookahead,g.block_start=g.strstart,g.insert=g.lookahead,g.lookahead=0,g.match_length=g.prev_length=2,g.match_available=0,b.next_in=p,b.input=q,b.avail_in=m,g.wrap=l,0}(this.strm,g)))throw new Error(Oa[e]);this._dict_set=!0}};cb.prototype.push=function(b,c){var d,e,f,h=this.strm,i=this.options.chunkSize;if(this.ended)return!1;e=c===~~c?c:!0===c?4:0,h.input=\"string\"==typeof b?v(b):\"[object ArrayBuffer]\"===bb.call(b)?new Uint8Array(b):b,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=Ga(i),h.next_out=0,h.avail_out=i),1!==(d=za(h,e))&&0!==d)return this.onEnd(d),this.ended=!0,!1;0!==h.avail_out&&(0!==h.avail_in||4!==e&&2!==e)||(\"string\"===this.options.to?this.onData(g(f=l(h.output,h.next_out),f.length)):this.onData(l(h.output,h.next_out)))}while((0<h.avail_in||0===h.avail_out)&&1!==d);return 4===e?(d=function(a){var b;return a&&a.state?42!==(b=a.state.status)&&69!==b&&73!==b&&91!==b&&103!==b&&113!==b&&666!==b?ka(a,-2):(a.state=null,113===b?ka(a,-3):0):-2}(this.strm),this.onEnd(d),this.ended=!0,0===d):2!=e||(this.onEnd(0),h.avail_out=0,!0)},cb.prototype.onData=function(a){this.chunks.push(a)},cb.prototype.onEnd=function(a){0===a&&(\"string\"===this.options.to?this.result=this.chunks.join(\"\"):this.result=Fa(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=cb,c.Inflate=P,c.Z_BEST_COMPRESSION=9,c.Z_BEST_SPEED=1,c.Z_BINARY=0,c.Z_BLOCK=5,c.Z_BUF_ERROR=-5,c.Z_DATA_ERROR=-3,c.Z_DEFAULT_COMPRESSION=-1,c.Z_DEFAULT_STRATEGY=0,c.Z_DEFLATED=8,c.Z_ERRNO=-1,c.Z_FILTERED=1,c.Z_FINISH=4,c.Z_FIXED=4,c.Z_FULL_FLUSH=3,c.Z_HUFFMAN_ONLY=2,c.Z_NEED_DICT=2,c.Z_NO_COMPRESSION=0,c.Z_NO_FLUSH=0,c.Z_OK=0,c.Z_PARTIAL_FLUSH=1,c.Z_RLE=3,c.Z_STREAM_END=1,c.Z_STREAM_ERROR=-2,c.Z_SYNC_FLUSH=2,c.Z_TEXT=1,c.Z_TREES=6,c.Z_UNKNOWN=2,c.deflate=Aa,c.deflateRaw=function(a,b){return(b=b||{}).raw=!0,Aa(a,b)},c.gzip=function(a,b){return(b=b||{}).gzip=!0,Aa(a,b)},c.inflate=D,c.inflateRaw=function(a,b){return(b=b||{}).raw=!0,D(a,b)},c.ungzip=D,Object.defineProperty(c,\"__esModule\",{value:!0})});// enable for high detailed logging inside worker\nvar traceDisabled=!1,FlvPlayerError=/*#__PURE__*/function(a){function b(a){var d;return _classCallCheck(this,b),d=c.call(this,a),d.name=\"FlvPlayerError\",d}_inherits(b,a);var c=_createSuper(b);return b}(/*#__PURE__*/_wrapNativeSuper(Error)),debug={trace:function trace(a){if(!a){for(var b,c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];(b=console).trace.apply(b,d)}},warn:function warn(a){if(!a){for(var b,c=arguments.length,d=Array(1<c?c-1:0),e=1;e<c;e++)d[e-1]=arguments[e];(b=console).warn.apply(b,d)}},error:function error(a,b){if(!a)throw new FlvPlayerError(b)}};function mergeBuffer(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=b[0].constructor;return b.reduce(function(a,b){var c=new d((0|a.byteLength)+(0|b.byteLength));return c.set(a,0),c.set(b,0|a.byteLength),c},new d)}function readBufferSum(a){var b=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];return a.reduce(function(c,d,e){return c+(b?d:d-128)*Math.pow(256,a.length-e-1)},0)}function readString(a){return String.fromCharCode.apply(String,a)}function readBuffer(a){function b(d){for(var e=new Uint8Array(d),f=0;f<d;f+=1)e[f]=a[c],c+=1;return b.index=c,e}var c=0;return b.index=0,b}function readDouble(a){var c=new DataView(new ArrayBuffer(a.length));return a.forEach(function(a,b){c.setUint8(b,a)}),c.getFloat64(0)}function readBoolean(a){return 0!==a[0]}var index=0,header=null,uint8=new Uint8Array,scripMeta=null,AudioSpecificConfig=null,AVCDecoderConfigurationRecord=null,nalStart=new Uint8Array([0,0,0,1]),fsvFullFrameArray=new Uint8Array;function readable(a){return uint8.length-index>=a}function read(a){for(var b=new Uint8Array(a),c=0;c<a;c+=1)b[c]=uint8[index],index+=1;return b}function demuxerScripTag(a){function b(a){var d=null;if(a!==void 0)switch(a){case 0:d=readDouble(c(8));break;case 1:d=readBoolean(c(1));break;case 2:{var l=readBufferSum(c(2));d=readString(c(l));break}case 3:{d=Object.create(null);for(var m=-1;9!==m;){var e=readBufferSum(c(2)),f=readString(c(e)),g=c(1)[0];f&&(d[f]=b(g)),m=g}break}case 5:d=null;break;case 6:d=void 0;break;case 7:d=\"Reference #\".concat(c.index),c(2);break;case 8:{d=Object.create(null);for(var n=-1;9!==n;){var h=readBufferSum(c(2)),j=readString(c(h)),k=c(1)[0];j&&(d[j]=b(k)),n=k}break}case 10:{var o=readBufferSum(c(4));d=[];for(var p,q=0;q<o;q+=1)p=c(1)[0],d.push(b(p));break}case 11:d=readDouble(c(2));break;case 12:{var i=readBufferSum(c(4));d=readString(c(i));break}default:debug.error(!1,\"AMF: Unknown metaData type: \".concat(a));}return d}var c=readBuffer(a.body),d=Object.create(null),e=Object.create(null);for(d.type=c(1)[0],debug.error(2===d.type,\"AMF: [amf1] type expect 2, but got \".concat(d.type)),d.size=readBufferSum(c(2)),d.string=readString(c(d.size)),e.type=c(1)[0],debug.error(8===e.type||3===e.type,\"AMF: [amf2] type expect 8 or 3, but got \".concat(e.type)),e.size=readBufferSum(c(4)),e.metaData=Object.create(null);c.index<a.body.length;){var f=readBufferSum(c(2)),g=readString(c(f)),h=c(1)[0];g&&(e.metaData[g]=b(h))}debug.warn(c.index===a.body.length,\"[AMF] Seems to be incompletely parsed\"),debug.warn(e.size===Object.keys(e.metaData).length,\"[AMF] [amf2] length does not match\"),scripMeta={amf1:d,amf2:e},postMessage({type:\"scripMeta\",data:scripMeta})}function parseAVCVideoData(a){var b=a.body.slice(1,5);debug.error(4<=b.length,\"[H264] Invalid AVC packet, missing AVCPacketType or/and CompositionTime\");var c=new DataView(b.buffer),d=c.getUint8(0),e=(16777215&c.getUint32(0))<<8>>8,f=e+a.timestamp,g=a.body.subarray(5);if(0===d){debug.warn(!AVCDecoderConfigurationRecord,\"[h264] Find another one AVCDecoderConfigurationRecord\"),debug.error(7<=g.length,\"[H264] AVCDecoderConfigurationRecord parse length is not enough\");var h=readBuffer(g),j={};j.configurationVersion=h(1)[0],debug.error(1===j.configurationVersion,\"[H264] Invalid configurationVersion: \".concat(j.configurationVersion)),j.AVCProfileIndication=h(1)[0],debug.error(0!==j.AVCProfileIndication,\"[H264] Invalid AVCProfileIndication: \".concat(j.AVCProfileIndication)),j.profile_compatibility=h(1)[0],j.AVCLevelIndication=h(1)[0],j.lengthSizeMinusOne=(3&h(1)[0])+1,debug.error(4===j.lengthSizeMinusOne||3!==j.lengthSizeMinusOne,\"[H264] Invalid lengthSizeMinusOne: \".concat(j.lengthSizeMinusOne)),j.numOfSequenceParameterSets=31&h(1)[0],debug.error(0!==j.numOfSequenceParameterSets,\"[H264] Invalid numOfSequenceParameterSets: \".concat(j.numOfSequenceParameterSets)),debug.warn(1===j.numOfSequenceParameterSets,\"[H264] Strange numOfSequenceParameterSets: \".concat(j.numOfSequenceParameterSets));for(var o=0;o<j.numOfSequenceParameterSets;o+=1)if(j.sequenceParameterSetLength=readBufferSum(h(2)),0<j.sequenceParameterSetLength){var i=h(j.sequenceParameterSetLength);postMessage({type:\"videoData\",data:mergeBuffer(nalStart,i)})}j.numOfPictureParameterSets=h(1)[0],debug.error(0!==j.numOfPictureParameterSets,\"[H264] Invalid numOfPictureParameterSets: \".concat(j.numOfPictureParameterSets)),debug.warn(1===j.numOfPictureParameterSets,\"[H264] Strange numOfPictureParameterSets: \".concat(j.numOfPictureParameterSets));for(var p=0;p<j.numOfPictureParameterSets;p+=1)if(j.pictureParameterSetLength=readBufferSum(h(2)),0<j.pictureParameterSetLength){var q=h(j.pictureParameterSetLength);postMessage({type:\"videoData\",data:mergeBuffer(nalStart,q)})}AVCDecoderConfigurationRecord=j,postMessage({type:\"AVCDecoderConfigurationRecord\",data:j})}else if(1===d)for(var k,l=AVCDecoderConfigurationRecord,m=l.lengthSizeMinusOne,n=readBuffer(g);n.index<g.length;)k=readBufferSum(n(m)),postMessage({type:\"videoData\",data:mergeBuffer(nalStart,n(k)),timestamp:f});else debug.error(2===d,\"[H264] Invalid video packet type \".concat(d))}function parseFSVideoPayload(a,b,c,d,e,f,g,h){var m=a.body.slice(5),n=new DataView(m.buffer),o=0,p=0,q=0,r=0,s=e*f,t=new Uint8Array(4*(g*h));1!==b&&(t=fsvFullFrameArray);for(var x=0;x<s;x+=1){if(o>=n.byteLength){debug.error(!0,\"We are out of scope for FSV video payload!\");break}if(q=Math.trunc(x/e),r=x%e,p=n.getUint16(o,!1),debug.trace(traceDisabled,\"\".concat(x,\"/\").concat(s,\" offset: \").concat(o,\", imageBlockDataSize: \").concat(p)),0<p){var i=m.slice(o+2,o+p+2);try{var y=pako.inflate(i);debug.trace(traceDisabled,\"compressed[\".concat(q,\", \").concat(r,\"]: \").concat(i.length,\" => inflated \").concat(y.length));var u=r*c,v=q*d,w=t.byteLength-4*(v*g)+4*u;0===v&&(w-=4*g);for(var z=0,j=0,k=0;j<y.byteLength;z+=4,j+=3,k=z%(4*c))// red\n// green\n// blue\nt[w+k]=y[j+2],t[w+k+1]=y[j+1],t[w+k+2]=y[j],t[w+k+3]=255,0!=z&&0==(z+4)%(4*c)&&(w-=4*g);debug.trace(traceDisabled,\"image(\".concat(g,\", \").concat(h,\"), row: \").concat(q,\", column: \").concat(r,\", dx: \").concat(u,\", dy: \").concat(v))}catch(a){debug.error(!0,a)}o+=p+2}else o+=2}// save full frame for further use with partial frames\nfsvFullFrameArray=t,postMessage({type:\"fsVideoData\",data:{width:g,height:h,data:t},timestamp:a.timestamp})}function parseFSVideoData(a,b){var c=a.body.slice(1,5);debug.error(4<=c.length,\"[FSV1] Invalid Flash Screen Video packet\");var d=new DataView(c.buffer),e=16*(((240&d.getUint8(0))>>>4)+1),f=4095&d.getUint16(0),g=16*(((240&d.getUint8(2))>>>4)+1),h=4095&d.getUint16(2),i=Math.trunc(f/e),j=Math.trunc(h/g);0!=f%e&&(i+=1),0!=h%g&&(j+=1),parseFSVideoPayload(a,b,e,g,i,j,f,h)}function demuxerVideoTag(a){debug.error(1<a.body.length,\"Invalid video packet\");var b={frameType:(240&a.body[0])>>4,codecID:15&a.body[0]};switch(3!==b.codecID&&7!==b.codecID&&debug.error(!0,\"[videoTrack] Unsupported codec in video frame: \".concat(b.codecID)),b.codecID){case 3:parseFSVideoData(a,b.frameType);break;case 7:parseAVCVideoData(a);break;default:debug.error(!0,\"[videoTrack] Unsupported codec in video frame: \".concat(b.codecID));}}function demuxerAudioTag(a){debug.error(1<a.body.length,\"Invalid audio packet\");var b={soundFormat:(240&a.body[0])>>4,soundRate:(12&a.body[0])>>2,soundSize:(2&a.body[0])>>1,soundType:(1&a.body[0])>>0};debug.error(10===b.soundFormat,\"[audioTrack] unsupported audio format: \".concat(b.soundFormat));var c=a.body.subarray(1),d=c[0];if(0===d){var k=c.subarray(1);debug.warn(!AudioSpecificConfig,\"[AAC] Find another one AudioSpecificConfig\"),debug.error(2<=k.length,\"[AAC] AudioSpecificConfig parse length is not enough\");var l={};l.audioObjectType=(248&k[0])>>3,l.samplingFrequencyIndex=((7&k[0])<<1)+(1&(128&k[1])>>7),l.channelConfiguration=(127&k[1])>>3,AudioSpecificConfig=l,postMessage({type:\"AudioSpecificConfig\",data:l})}else{var e=AudioSpecificConfig,f=e.audioObjectType,g=e.samplingFrequencyIndex,h=e.channelConfiguration,i=a.dataSize-2+7,j=new Uint8Array(7);j[0]=255,j[1]=240,j[1]|=0,j[1]|=0,j[1]|=1,j[2]=f-1<<6,j[2]|=(15&g)<<2,j[2]|=0,j[2]|=(4&h)>>2,j[3]=(3&h)<<6,j[3]|=0,j[3]|=0,j[3]|=0,j[3]|=0,j[3]|=(6144&i)>>11,j[4]=(2040&i)>>3,j[5]=(7&i)<<5,j[5]|=31,j[6]=252;var m=a.body.subarray(2);postMessage({type:\"audioData\",data:mergeBuffer(j,m),timestamp:a.timestamp})}}onmessage=function onmessage(a){if(uint8=mergeBuffer(uint8,a.data.uint8),!header&&readable(13)){header=Object.create(null),header.signature=readString(read(3)),header.version=read(1)[0],debug.error(\"FLV\"===header.signature&&1===header.version,\"FLV header not found\"),header.flags=read(1)[0];var b=0!=(4&header.flags)>>>2,c=0!=(1&header.flags);debug.warn(c,\"[FLV header] flags not found video\"),debug.warn(b,\"[FLV header] flags not found audio\"),header.headersize=readBufferSum(read(4));var j=readBufferSum(read(4));debug.error(0===j,\"PrevTagSize0 should be equal to 0, but got \".concat(j)),postMessage({type:\"flvHeader\",data:header})}for(;index<uint8.length;){var d=Object.create(null),e=index;if(readable(11)){d.tagType=read(1)[0],d.dataSize=readBufferSum(read(3));var f=read(1)[0],g=read(1)[0],h=read(1)[0],i=read(1)[0];d.timestamp=h|g<<8|f<<16|i<<24,d.streamID=readBufferSum(read(3)),debug.error(0===d.streamID,\"streamID should be equal to 0, but got \".concat(d.streamID))}else return index=0,void(uint8=uint8.subarray(e));if(readable(d.dataSize+4)){d.body=read(d.dataSize);var k=readBufferSum(read(4));debug.error(k===d.dataSize+11,\"Invalid PrevTagSize: \".concat(k))}else return index=0,void(uint8=uint8.subarray(e));switch(d.tagType){case 18:demuxerScripTag(d);break;case 9:demuxerVideoTag(d);break;case 8:a.data.hasAudio&&demuxerAudioTag(d);break;default:debug.error(!1,\"unknown tag type: \".concat(d.tagType));}}index=0,uint8=new Uint8Array};"])));
    this.demuxRate = calculationRate(function (rate) {
      flv.emit('demuxRate', rate);
    });
    flv.on('destroy', function () {
      _this.demuxWorker.terminate();

      _this.demuxWorker = null;
    });
    flv.on('streamStart', function () {
      _this.streaming = true;
      _this.streamStartTime = getNowTime();

      if (typeof options.url === 'string') {
        var url = Object.assign(document.createElement('a'), {
          href: options.url
        }).href;
        debug.log('stream-url', url);
      }
    });
    flv.on('streaming', function (uint8) {
      _this.demuxWorker.postMessage({
        uint8: uint8,
        hasAudio: options.hasAudio
      });
    });
    flv.on('streamEnd', function (uint8) {
      _this.streaming = false;
      _this.streamEndTime = getNowTime();

      if (uint8) {
        _this.index = 0;

        _this.demuxWorker.postMessage({
          uint8: uint8,
          hasAudio: options.hasAudio
        });
      }

      debug.log('stream-time', "".concat(_this.streamEndTime - _this.streamStartTime, " ms"));
      _this.demuxed = true;
      flv.emit('demuxDone');
      debug.log('demux-done');
    });
    var sps = new Uint8Array();
    var pps = new Uint8Array();

    this.demuxWorker.onmessage = function (event) {
      var message = event.data;

      switch (message.type) {
        case 'flvHeader':
          _this.header = message.data;
          flv.emit('flvHeader', _this.header);
          debug.log('flv-header', _this.header);
          break;

        case 'scripMeta':
          _this.scripMeta = message.data;
          flv.emit('scripMeta', _this.scripMeta);
          debug.log('scrip-meta', _this.scripMeta);
          break;

        case 'AVCDecoderConfigurationRecord':
          _this.AVCDecoderConfigurationRecord = message.data;
          flv.emit('AVCDecoderConfigurationRecord', _this.AVCDecoderConfigurationRecord);
          debug.log('AVCDecoderConfigurationRecord', _this.AVCDecoderConfigurationRecord);
          debug.log('AVC-codecs', getAVCCodecs(_this.AVCDecoderConfigurationRecord));
          debug.log('AVC-profile', getProfileString(_this.AVCDecoderConfigurationRecord.AVCProfileIndication));
          debug.log('AVC-level', getLevelString(_this.AVCDecoderConfigurationRecord.AVCLevelIndication));
          break;

        case 'AudioSpecificConfig':
          _this.AudioSpecificConfig = message.data;
          flv.emit('AudioSpecificConfig', _this.AudioSpecificConfig);
          debug.log('AudioSpecificConfig', _this.AudioSpecificConfig);
          debug.log('AAC-codecs', getAACCodecs(_this.AudioSpecificConfig));
          break;

        case 'videoData':
          {
            _this.demuxRate(1);

            _this.videoDataLength += 1;
            _this.videoDataSize += message.data.byteLength;
            var readNalu = readBuffer(message.data);
            readNalu(4);
            var naluType = readNalu(1)[0] & 31;

            switch (naluType) {
              case 1:
              case 5:
                {
                  flv.emit('videoData', mergeBuffer(sps, pps, message.data), message.timestamp);
                  break;
                }

              case 7:
                sps = message.data;
                break;

              case 8:
                pps = message.data;
                break;
            }

            break;
          }

        case 'fsVideoData':
          {
            _this.demuxRate(1);

            _this.videoDataLength += 1;
            _this.videoDataSize += message.data.byteLength;
            flv.emit('fsVideoData', message.data, message.timestamp);
            break;
          }

        case 'audioData':
          _this.audioDataLength += 1;
          _this.audioDataSize += message.data.byteLength;
          flv.emit('audioData', message.data, message.timestamp);
          break;
      }
    };
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var FetchLoader = /*#__PURE__*/function () {
    function FetchLoader(flv) {
      var _this = this;

      classCallCheck(this, FetchLoader);

      this.flv = flv;
      var options = flv.options,
          player = flv.player,
          debug = flv.debug;
      this.byteLength = 0;
      this.reader = null;
      this.chunkStart = 0;
      this.contentLength = 0;
      this.data = new Uint8Array();
      this.readChunk = throttle(this.readChunk, 1000);
      this.chunkSize = options.hasAudio ? options.videoChunk + options.audioChunk : options.videoChunk;
      this.streamRate = calculationRate(function (rate) {
        flv.emit('streamRate', rate);
      });
      flv.on('destroy', function () {
        if (_this.reader) {
          _this.reader.cancel();
        }

        _this.data = null;
      });
      flv.on('timeupdate', function (currentTime) {
        if (!options.live && player.loaded - currentTime <= 5) {
          _this.readChunk();
        }
      });

      if (checkReadableStream()) {
        debug.log('stream-type', 'Try use ReadableStream');
        this.initFetchStream();
      } else {
        debug.log('stream-type', 'Try use http headers range');
        fetch(options.url, {
          method: 'head',
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: options.cors ? 'cors' : 'no-cors'
        }).then(function (response) {
          _this.contentLength = Number(response.headers.get('content-length')) || options.filesize;
          debug.log('stream-contentLength', _this.contentLength);

          _this.flv.emit('streamStart');

          _this.initFetchRange(0, _this.chunkSize);
        }).catch(function (error) {
          flv.emit('streamError', error);
          throw error;
        });
      }
    }

    createClass(FetchLoader, [{
      key: "readChunk",
      value: function readChunk() {
        var chunkEnd = Math.min(this.chunkStart + this.chunkSize, this.data.length);

        if (chunkEnd > this.chunkStart) {
          var chunkData = this.data.subarray(this.chunkStart, chunkEnd);
          this.flv.emit('streaming', chunkData);
          this.chunkStart = chunkEnd;
        }
      }
    }, {
      key: "initFetchStream",
      value: function initFetchStream() {
        var _this2 = this;

        var _this$flv = this.flv,
            options = _this$flv.options,
            debug = _this$flv.debug;
        this.flv.emit('streamStart');
        return fetch(options.url, {
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: options.cors ? 'cors' : 'no-cors',
          headers: options.headers
        }).then(function (response) {
          if (response.body && typeof response.body.getReader === 'function') {
            _this2.reader = response.body.getReader();
            return function read() {
              var _this3 = this;

              return this.reader.read().then(function (_ref) {
                var done = _ref.done,
                    value = _ref.value;

                if (done) {
                  _this3.flv.emit('streamEnd');

                  debug.log('stream-end', "".concat(_this3.byteLength, " byte"));
                  return null;
                }

                var uint8 = new Uint8Array(value);
                _this3.byteLength += uint8.byteLength;

                _this3.streamRate(uint8.byteLength);

                if (options.live) {
                  _this3.flv.emit('streaming', uint8);
                } else {
                  _this3.data = mergeBuffer(_this3.data, uint8);

                  if (_this3.chunkStart === 0 && _this3.data.length >= _this3.chunkSize) {
                    _this3.readChunk();
                  }
                }

                return read.call(_this3);
              }).catch(function (error) {
                _this3.flv.emit('streamError', error);

                throw error;
              });
            }.call(_this2);
          }

          debug.log('stream-type', 'Try use response arrayBuffer');
          return response.arrayBuffer();
        }).then(function (arrayBuffer) {
          if (arrayBuffer && arrayBuffer.byteLength && !options.live) {
            _this2.data = new Uint8Array(arrayBuffer);
            _this2.byteLength += _this2.data.byteLength;

            _this2.flv.emit('streamEnd', _this2.data);

            debug.log('stream-end', "".concat(_this2.byteLength, " byte"));
          }
        }).catch(function (error) {
          _this2.flv.emit('streamError', error);

          throw error;
        });
      }
    }, {
      key: "initFetchRange",
      value: function initFetchRange(rangeStart, rangeEnd) {
        var _this4 = this;

        var options = this.flv.options;
        return fetch(options.url, {
          credentials: options.withCredentials ? 'include' : 'omit',
          mode: options.cors ? 'cors' : 'no-cors',
          headers: _objectSpread(_objectSpread({}, options.headers), {}, {
            range: "bytes=".concat(rangeStart, "-").concat(rangeEnd)
          })
        }).then(function (response) {
          return response.arrayBuffer();
        }).then(function (value) {
          var uint8 = new Uint8Array(value);
          _this4.byteLength += uint8.byteLength;

          _this4.streamRate(uint8.byteLength);

          if (options.live) {
            _this4.flv.emit('streaming', uint8);
          } else {
            _this4.data = mergeBuffer(_this4.data, uint8);

            if (_this4.chunkStart === 0 && _this4.data.length >= _this4.chunkSize) {
              _this4.readChunk();
            }
          }

          var nextRangeStart = Math.min(_this4.contentLength, rangeEnd + 1);
          var nextRangeEnd = Math.min(_this4.contentLength, nextRangeStart + _this4.chunkSize);

          if (nextRangeEnd > nextRangeStart) {
            _this4.initFetchRange(nextRangeStart, nextRangeEnd);
          }
        }).catch(function (error) {
          _this4.flv.emit('streamError', error);

          throw error;
        });
      }
    }]);

    return FetchLoader;
  }();

  var WebsocketLoader = function WebsocketLoader(flv) {
    var _this = this;

    classCallCheck(this, WebsocketLoader);

    var debug = flv.debug,
        options = flv.options,
        proxy = flv.events.proxy;
    this.byteLength = 0;
    this.streamRate = calculationRate(function (rate) {
      flv.emit('streamRate', rate);
    });
    this.socket = new WebSocket(flv.options.url);
    this.socket.binaryType = 'arraybuffer';
    flv.emit('streamStart');
    proxy(this.socket, 'open', function () {
      _this.socket.send(options.socketSend);
    });
    proxy(this.socket, 'message', function (event) {
      var uint8 = new Uint8Array(event.data);
      _this.byteLength += uint8.byteLength;

      _this.streamRate(uint8.byteLength);

      flv.emit('streaming', uint8);
    });
    proxy(this.socket, 'close', function () {
      flv.emit('streamEnd');
      debug.log('stream-end', "".concat(_this.byteLength, " byte"));
    });
    proxy(this.socket, 'error', function (error) {
      flv.emit('streamError', error);
      throw error;
    });
    flv.on('destroy', function () {
      _this.socket.close();
    });
  };

  var FileLoader = function FileLoader(flv) {
    classCallCheck(this, FileLoader);

    var reader = new FileReader();
    var proxy = flv.events.proxy;
    proxy(reader, 'load', function (e) {
      var uint8 = new Uint8Array(e.target.result);
      flv.emit('streamEnd', uint8);
      flv.debug.log('stream-end', "".concat(uint8.byteLength, " byte"));
    });
    proxy(reader, 'error', function (error) {
      flv.emit('streamError', error);
    });
    flv.on('destroy', function () {
      reader.abort();
    });
    flv.emit('streamStart');
    reader.readAsArrayBuffer(flv.options.url);
  };

  var Stream = /*#__PURE__*/function () {
    function Stream(flv) {
      classCallCheck(this, Stream);

      var Loader = Stream.getLoaderFactory(flv.options.url);
      flv.debug.log('stream-loader', Loader.name);
      return new Loader(flv, this);
    }

    createClass(Stream, null, [{
      key: "getLoaderFactory",
      value: function getLoaderFactory(url) {
        if (url instanceof File) {
          return FileLoader;
        }

        if (/^ws{1,2}:\/\//i.test(url)) {
          return WebsocketLoader;
        }

        return FetchLoader;
      }
    }]);

    return Stream;
  }();

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var id = 0;
  var instances = [];

  var FlvPlayer = /*#__PURE__*/function (_Emitter) {
    inherits(FlvPlayer, _Emitter);

    var _super = _createSuper$1(FlvPlayer);

    function FlvPlayer(options) {
      var _this;

      classCallCheck(this, FlvPlayer);

      _this = _super.call(this);
      _this.options = optionValidator(_objectSpread$1(_objectSpread$1({}, FlvPlayer.options), options), FlvPlayer.scheme);

      if (_this.options.live) {
        _this.options.cache = false;
      }

      if (typeof _this.options.container === 'string') {
        _this.options.container = document.querySelector(_this.options.container);
      }

      if (window.FlvplayerDecoder) {
        _this.init();
      } else {
        loadScript(_this.options.decoder, 'FlvplayerDecoder').then(function () {
          _this.init();
        });
      }

      return _this;
    }

    createClass(FlvPlayer, [{
      key: "init",
      value: function init() {
        this.isDestroy = false;
        this.isMobile = isMobile();
        this.isWechat = isWechat();
        this.debug = new Debug(this);
        this.events = new Events(this);
        this.player = new Player(this);
        this.decoder = new Decoder(this);
        this.demuxer = new Demuxer(this);
        this.stream = new Stream(this);
        proxyPropertys(this, this.player);

        if (window.FlvplayerControl && this.options.control) {
          this.control = new window.FlvplayerControl(this);
          proxyPropertys(this, this.control);
        }

        id += 1;
        this.id = id;
        instances.push(this);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.isDestroy = true;
        this.emit('destroy');
        instances.splice(instances.indexOf(this), 1);
      }
    }], [{
      key: "options",
      get: function get() {
        return {
          url: '',
          container: '',
          poster: '',
          debug: false,
          live: false,
          loop: false,
          autoPlay: false,
          hasAudio: true,
          control: true,
          cache: true,
          muted: false,
          cors: true,
          touchResume: true,
          withCredentials: false,
          volume: 0.7,
          frameRate: 30,
          maxTimeDiff: 200,
          videoChunk: 1024 * 1024,
          audioChunk: 16 * 1024,
          filesize: Infinity,
          width: 400,
          height: 300,
          duration: 0,
          socketSend: '',
          headers: {},
          decoder: './flvplayer-decoder-baseline.js'
        };
      }
    }, {
      key: "scheme",
      get: function get() {
        return {
          url: 'string|file',
          container: 'string|htmldivelement',
          poster: 'string',
          debug: 'boolean',
          live: 'boolean',
          loop: 'boolean',
          autoPlay: 'boolean',
          hasAudio: 'boolean',
          control: 'boolean',
          cache: 'boolean',
          muted: 'boolean',
          cors: 'boolean',
          touchResume: 'boolean',
          withCredentials: 'boolean',
          volume: 'number',
          frameRate: 'number',
          maxTimeDiff: 'number',
          videoChunk: 'number',
          audioChunk: 'number',
          filesize: 'number',
          width: 'number',
          height: 'number',
          duration: 'number',
          socketSend: 'string',
          headers: 'object',
          decoder: 'string'
        };
      }
    }, {
      key: "isSupported",
      get: function get() {
        return isSupported;
      }
    }, {
      key: "instances",
      get: function get() {
        return instances;
      }
    }, {
      key: "version",
      get: function get() {
        return '1.1.8';
      }
    }, {
      key: "env",
      get: function get() {
        return '"development"';
      }
    }, {
      key: "utils",
      get: function get() {
        return utils;
      }
    }]);

    return FlvPlayer;
  }(Emitter);
  console.log('%c FlvPlayer.js %c 1.1.8 %c https://flvplayer.js.org', 'color: #fff; background: #5f5f5f', 'color: #fff; background: #4bc729', '');

  return FlvPlayer;

})));
//# sourceMappingURL=flvplayer.js.map
