class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
      //  this.bodyA=bodyA;
        this.pointB=pointB;
        this.rubber= Constraint.create(options);
        World.add(world, this.rubber);
    }
    attach(body){
    this.rubber.bodyA = body;
    }
    fly(){
        this.rubber.bodyA =null;
    }

    display(){
        if(this.rubber.bodyA){
            var pointA = this.rubber.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop();
        }
    }
    
}