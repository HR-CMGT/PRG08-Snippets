namespace Vector {

    export class Vector2 {
        
        public x : number;
        public y : number;
        
        constructor(x:number, y:number) {
            this.x = x;
            this.y = y;
        }
        
        public add(v: Vector2): Vector2 {
            return new Vector2(this.x + v.x, this.y + v.y);
        }

        public difference(v: Vector2): Vector2 {
            return new Vector2(this.x - v.x, this.y - v.y);
        }

        public scale(n: number): Vector2 {
            return new Vector2(this.x * n, this.y * n);
        }

        public magnitude(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        
        // x en y delen door de lengte (magnitude) geeft normalized
        public normalize():Vector2 {
            let mag = this.magnitude();
            return new Vector2(this.x/mag, this.y/mag);
        }

        public static reflectX(point: Vector2, x: number) {
            return new Vector2(2 * x - point.x, point.y);
        }

        public static reflectY(point: Vector2, y: number) {
            return new Vector2(point.x, 2 * y - point.y);
        }
    }
}