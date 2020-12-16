class Bob{
    constructor(x,y,radius){
        var bob_options={
            //'restitution':0.3,
            'density':0.5,
            'friction':0.5,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,bob_options);
        this.radius = radius;
        World.add(world,this.body);
    };

    display(){
        var pos = this.body.position;

        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    };
};