namespace Canvas {
    export class AnimatedSprite {
        public x: number = 0;
        public y: number = 0;
        public frameCount: number = 0;
        public atlas: cTextureAtlas;
        public sequenceName: string = "";

        public currentFrame = 0;

        constructor(x: number, y: number, frame_count: number, atlas: cTextureAtlas, sequence_name: string) {
            this.x = x;
            this.y = y;
            this.frameCount = frame_count;
            this.atlas = atlas;
            this.sequenceName = sequence_name;
        }
    }
}