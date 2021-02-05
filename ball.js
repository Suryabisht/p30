class Ball {
   constructor(x,y) {
       var option = {
           'density' : 1.0,
           'frictionAir' : 0.005
       }
       this.body = Bodies.circle(x,y,60,option) ;
       World.add(world,this.body) ;
   }
   display() {
       push ();
       translate(this.body.position.x,this.body.position.y) ;
       rotate(this.body.angle) ;
       ellipse(0,0,60,60) ;
       pop ();
   }
}