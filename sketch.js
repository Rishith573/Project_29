const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, 
box11, box12, box13, box14, box15, box16;

var box17, box18, box19, box20, box21, box22, box23, box24, box25;

var ground;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500, 200, 200, 30);

  box1 = new Box(400, 300, 40, 40);

  
}

function draw() {
  background(255,255,255);
  Engine.run(engine);  
  drawSprites();
}