const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var playerPaddle,playerImg,computerPaddle,ComputerImg,ball,ballImg,cone1,cone2,
cone3,cone4,cone5,cone6,cone1Img,cone2Img,cone3Img,cone4Img,cone5Img,cone6Img;
//bgImg = "background.png";
var score=0;
var edges;
function preload(){
  //Adding Animations In the Preload Funct...
  //getBackgroundImage
 ballImg = loadAnimation("fooball3.png")
 cone1Img = loadAnimation("Cone 1.png") 
 cone2Img = loadAnimation("Cone2.png") 
 cone3Img = loadAnimation("Cone3.png") 
 cone4Img = loadAnimation("Cone4.png") 
 cone5Img = loadAnimation("Cone5.png") 
 cone6Img = loadAnimation("Cone6.png") 

}
function setup() {
  createCanvas(900,300);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //Creation Of Objects
 playerPaddle = createSprite(100,200,10,10);
cone1 = createSprite(200,150,10,10);
cone1.addAnimation("Cone",cone1Img);
cone1.scale =0.1;
cone1.velocityY=3;

cone2 = createSprite(270,150,10,10);
cone2.addAnimation("Cone",cone2Img);
cone2.scale =0.1;
cone2.velocityY=-4;
 
cone3 = createSprite(340,150,10,10);
cone3.addAnimation("Cone",cone3Img);
cone3.scale =0.1;
cone3.velocityY= 5;

cone4 = createSprite(410,150,10,10);
cone4.addAnimation("Cone",cone1Img);
cone4.scale =0.1;
cone4.velocityY=-6;

cone5 = createSprite(480,150,10,10);
cone5.addAnimation("Cone",cone2Img);
cone5.scale =0.1;
cone5.velocityY=7;
 
cone6 = createSprite(550,150,10,10);
cone6.addAnimation("Cone",cone3Img);
cone6.scale =0.1;
cone6.velocityY= -8;

 ball = createSprite(100,100,60,60);
ball.addAnimation("BALL",ballImg);
ball.scale=0.04;

}
function draw() {
  background("blue");
  Engine.update(engine);
  edges= createEdgeSprites();
if(keyWentUp(UP_ARROW)){
  playerPaddle.velocityX=2;
}
if(playerPaddle.velocityX > 450){
  playerPaddle.velocityX=0;
}
 cone1.bounceOff(edges);
 cone2.bounceOff(edges);
 cone3.bounceOff(edges);
 cone4.bounceOff(edges);
 cone5.bounceOff(edges);
 cone6.bounceOff(edges);

 text("SCORE : "+score,750,40);
drawSprites();
}

  


 
