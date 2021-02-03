const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Drops = 100;
var drops = [];
var umbrella
var thunder,thunder1, thunder2, thunder3, thunder4;
var thunderFrame = 0;
var rand;

function preload(){
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")
}

function setup(){
    createCanvas(400,650)
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){

        for(var i=0; i<Drops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

  }
    
    


function draw(){
    background(0)
    umbrella.display();
    Engine.update(engine)
    var rand = Math.round(random(1,3));
  if(frameCount%80===0){
    thunderFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);

   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     case 4 : thunder.addImage(thunder4);
     break;
   }

   //console.log(thunderFrame);
  }
  
  if(thunderFrame + 10 === frameCount && thunder){
    thunder.destroy();
 }

  

    for(var i = 0; i<Drops; i++){
        drops[i].display();
        drops[i].update();
        
    }

    drawSprites();


}
