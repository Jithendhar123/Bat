class Umbrella{
    constructor(x, y, r){
        var options = { 
        'isStatic': true
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.r = 10;
        this.image = loadImage("walking_1.png");
        World.add(world, this.body);
    }
 
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+50,300,300);
      }



}