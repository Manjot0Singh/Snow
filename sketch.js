const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world;


var backgroundImg;

var bg = "snow1.jpg";
 
var boy,boyImg,boyImg2;

var snow1 = [];

function preload(){

backgroundImg = loadImage(bg);
boyImg = loadImage("boy.jpg");
boyImg2 = loadImage("boy_jump.jpg");

}

function setup() {
  createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;


    boy = createSprite(300,500);
    boy.addImage(boyImg2);
    boy.scale = 0.3;

    //snow1 = new Snow(200,200,10,10)
   
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);

  if(frameCount % 60 === 0){
    snow1.push(new Snow(random(width/2-200,width/2+200),10,10));
     }

for(var i = 0; i < snow1.length; i++){
  snow1[i].display();
}


if(keyDown(UP_ARROW)){
  boy.addImage(boyImg);
  }
  

   drawSprites();
  
}








