// namespacing Matter.Engine, Matter.World, Matter.Bodies and Matter.Constraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, 
box11, box12, box13, box14, box15, box16;

var box17, box18, box19, box20, box21, box22, box23, box24, box25;

var ground1, ground2;

var hexa, chain;

function setup() {
  createCanvas(1250,600);
  engine = Engine.create();
  world = engine.world;

// creating polygon
  hexa = Bodies.circle(50, 200, 20);
  World.add(world, hexa);

  chain = new Chain(hexa, {x:150, y:200});

// creating ground1
  ground1 = new Ground(580, 450, 320, 20);

// first layer of ground1
  box1 = new Box(460, 400, 40, 40);
  box2 = new Box2(500, 400, 40, 40);
  box3 = new Box(540, 400, 40, 40);
  box4 = new Box2(580, 400, 40, 40);
  box5 = new Box(620, 400, 40, 40);
  box6 = new Box2(660, 400, 40, 40);
  box7 = new Box(700, 400, 40, 40);
  
// second layer of ground1
  box8 = new Box(500, 300, 40, 40);
  box9 = new Box2(540, 300, 40, 40);
  box10 = new Box(580, 300, 40, 40);
  box11 = new Box2(620, 300, 40, 40);
  box12 = new Box(660, 300, 40, 40);

// third layer of ground1
  box13 = new Box(540, 200, 40, 40);
  box14 = new Box2(580, 200, 40, 40);
  box15 = new Box(620, 200, 40, 40)

// last layer for ground1
  box16 = new Box(580, 100, 40, 40);

// creating ground2
  ground2 = new Ground(1000, 210, 235, 20)

// first layer of ground2
  box17 = new Box3(915, 200, 40, 40);
  box18 = new Box4(955, 200, 40, 40);
  box19 = new Box3(995, 200, 40, 40);
  box20 = new Box4(1035, 200, 40, 40);
  box21 = new Box3(1075, 200, 40, 40);

// secong layer of ground2
  box22 = new Box3(955, 100, 40, 40);
  box23 = new Box4(995, 100, 40, 40);
  box24 = new Box3(1035, 100, 40, 40);
  
}

function draw() {
// set the background to black
  background(0);

// run the engine
  Engine.run(engine);

//for refering x and y coordinates of the mouse
  textSize(20)
  text("score:" + mouseX + "," + mouseY, 100, 100)

// displaying the ground1
  ground1.display();
// displaying first layer of ground1
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
// displaying second layer of ground1
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
// displaying third layer of ground1
  box13.display();
  box14.display();
  box15.display();
// displaying last layer of ground1
  box16.display();

// displaying ground2
  ground2.display();
  
// displaying first layer of ground2
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

// displaying second layer of ground2
  box22.display();
  box23.display();
  box24.display();

// displaying last layer of ground2
  //box25.display();
  
}