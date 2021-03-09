class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 2
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8)
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
    
}