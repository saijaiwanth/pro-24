class paper {
    constructor () {
     var options={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2

     }
     this.body=Bodies.circle(100,400,20);
     World.add(world, this.body);
     }
     display(){
       fill("pink");
       ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,40)
         
     }
    }
