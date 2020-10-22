
export default function FlashScreenVideoCanvas(canvas) {
    this.canvasElement = canvas;

    if(this.contextGL) {
        this.initProgram();
    }
}

/**
 * Draw picture data to the canvas.
 * Otherwise, data must be an RGBA formatted ArrayBuffer.
 */
FlashScreenVideoCanvas.prototype.drawFrame = function(frame) {
    var { width, height, data } = frame;
    var croppingParams = null;

    this.drawNextOuptutPictureRGBA(width, height, croppingParams, new Uint8Array(data));
}

/**
 * Draw next output picture using ARGB data on a 2d canvas.
 */
FlashScreenVideoCanvas.prototype.drawNextOuptutPictureRGBA = function(width, height, croppingParams, data) {
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
}
