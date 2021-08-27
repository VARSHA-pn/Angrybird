class BaseClass
{
    constructor(x, y,width,height,angle)
    {
        var options = {'restitution': 0.8, "friction":1.0}

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        this.bodyA = angle;
        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        this.image = loadImage("sprites/base.png");
        World.add(myWorld, this.body);
    }
    display()
    {
        
        push(); //push the old settings of the canvas 

        translate(this.body.position.x, this.body.position.y); //move my canvas origin
        rotate(this.body.angle); //rotate the canvas by some angle

        imageMode(CENTER);
        image(this.image,0,0,this.bodyW,this.bodyH);
        //rectMode(CENTER);
        //fill("red");
        //rect(0, 0, this.bodyW, this.bodyH);
        
        pop(); //Take out the old settings of the canvas
    }
};