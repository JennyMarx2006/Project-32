const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var blower,blowermouth;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	
	ball=new Ball(400,20,30);
  blower=new Blower(400,350,120,180);
  blowermouth=new BlowerMouth(200,400,280,20);

  button=createButton("click to blow");
  button.position(width/2,height-100);
  button.mousePressed(blow);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



ball.display();
blower.display();
blowermouth.display();
  
 
}
function blow(){
	
		Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.8})
	}




