class Snow{
    constructor(x,y,r) {
        var options = {
            'restitution':0.8
                           
        }
        
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }

      display(){
        var angle  = this.body.angle

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        fill(this.color)
        ellipseMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}
