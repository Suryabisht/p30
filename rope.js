class Rope {
    constructor(bodyA,pointB) {
        var option2 = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 250
        }
        this.pointB = pointB ;
        this.rope = Constraint.create(option2) ;
        World.add(world,this.rope) ;
    }
    attach(body) {
        this.rope.bodyA = body ;
    }
    fly() {
        this.rope.bodyA = null ;
    }
    display() {
      if (this.rope.bodyA) {
          var pointA = this.rope.bodyA.position ;
          var pointB = this.pointB ;
          push () ;
          stroke("blue") ;
          strokeWeight(3) ;
        line (pointB.x,pointB.y,pointA.x,pointA.y) ;
        pop () ;
      }
    }
}