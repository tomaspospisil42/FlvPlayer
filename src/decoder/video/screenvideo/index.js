import VideoSuperDecoder from '../index';
import Renderer from './renderer';

export default class VideoDecoder extends VideoSuperDecoder {
    constructor(flv, decoder) {
        super(flv, decoder);
        const { player, events } = flv;
        this.renderer = new Renderer(player.$canvas);

        flv.on('fsVideoData', (frame, timestamp) => {
            flv.emit('befoerdecoding', timestamp);
            flv.emit('decoding', frame, frame.data.byteLength);
        });
    }

    getFramesSize(framesIndex) {
        let framesSize = 0;
        for (let index = 0; index < framesIndex; index++) {
            framesSize += this.videoframes[index].data.byteLength;
        }
        return framesSize;
    }
}
