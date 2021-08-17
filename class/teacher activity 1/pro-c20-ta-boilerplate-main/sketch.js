
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ground;

var ball_options={
  'restitution': 0.95,
  'frictionAir' : 0.01
}

var rect_options = {
'isStatic' : true
}
function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;
ball = Bodies.circle(100,10,10,ball_options)
World.add(world, ball);

ground=Bodies.rectangle(200,400,400,10,rect_options);
World.add(world,ground);
}

function draw() 
{
  background(51);

  Engine.update(engine);
 ellipse(ball.position.x, ball.position.y,10);
 rect(ground.position.x, ground.position.y, 400,10);
}

