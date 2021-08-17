
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ball1;
var ground, ground1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var rock_options = {
     'restitution':0.8,
     'density': 0.2,
     'frictionAir':0.1
   }

   var ops={
     isStatic : true
   }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball1 = Bodies.circle(350,30,20,rock_options);
World.add(world, ball1);

ground1  = Bodies.rectangle(300,200,200,20, ground_options);
World.add(world,ground1);

wedge = Bodies.rectangle(100,200,100,20,ops);
World.add(world,wedge);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x, ball1.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 rect(ground1.position.x, ground1.position.y,200,20);
 
}

