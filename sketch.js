const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ;
var myEngine;
var myWorld;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var ground;
var backgroundImage;
var platform;
var slingshot;
var  chance = 3;
var score=0;

function preload()
{
   getTime();
}

function setup()
{
  var canvas = createCanvas(1200, 400);

  myEngine = Engine.create();
  myWorld = myEngine.world; 

  ground = new Ground(600, height, 1200, 20);
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810, 260, 300, PI/2);

  box3 = new Box(700, 220, 70, 70);
  box4 = new Box(920, 220, 70, 70);
  pig2 = new Pig(810, 220);
  log2 = new Log(810, 180, 300, PI/2);

  box5 = new Box(810, 150, 70, 70);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);


  bird = new Bird(200, 50);
  platform = new Ground(150,305,300,170);
  slingshot = new Slingshot(bird.body,{x:200,y:50});

}

function draw()
{
  if(backgroundImage)
  {
  background(backgroundImage)
  }


  textSize(15);
  text(mouseX + "," + mouseY,100,50);
  text("chance:" + chance,1100,100);
  text("Score:" + score,1100,70);

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  bird.display();
 

  platform.display();
  slingshot.display();
}

function mouseDragged()
{
  if(slingshot.sling.bodyA === bird.body)
  {
  Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY});
  }
}

function mouseReleased()
{
  chance = chance-1
  slingshot.fly();
}

function keyPressed()
{
  if (keyCode === 32 && chance !== 0) //32 means spacekey     
  {
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body,{x:200 , y:50});
    slingshot.attach(bird.body);
  }
}

async function getTime()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  console.log(responseJSON);
  console.log(responseJSON.datetime);

  var datetimeInfo = responseJSON.datetime;
  var hour = datetimeInfo.slice(11,13);
  console.log(hour); 

  if(hour>=06 && hour<=19)
  {
    backgroundImage = loadImage("sprites/bg1.png");
  }
  else
  {
    backgroundImage = loadImage("sprites/bg2.jpg");
  }
}














