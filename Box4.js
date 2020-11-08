class Box4{
    constructor(x, y, width, height) {
        var options = {
           isStatic:false,
           'restitution':0.03,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,40,50, options);
        this.width = 30;
        this.height = 40;
     
        World.add(world, this.body);
      }
      display(){
      
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("violet")
        rect( 0, 0,40,50);
        pop();
      }
}