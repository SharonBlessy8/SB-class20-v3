var bathimg, brushimg, drinkimg,eatimg,gymimg,sleepimg, moveimg,bg;
var astro;
var sleep;


function preload(){
  bg= loadImage("iss.png");
bathimg = loadAnimation("bath1.png","bath2.png");
brushimg = loadImage("brush.png");
drinkimg = loadAnimation("drink1.png", "drink2.png");
eatimg = loadAnimation("eat1.png", "eat2.png");
gymimg= loadAnimation("gym1.png","gym2.png", "gym11.png","gym12.png");
moveimg = loadAnimation("move.png","move1.png","move.png","move1.png");
sleepimg = loadAnimation("sleep.png");

}


function setup() {
  createCanvas(600,500);
astro= createSprite(300, 230);
 astro.addAnimation("sleeping",sleepimg);
 astro.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();
  text("INSTRUCTIONS:", 30,30);
  text("Up Arrow = Brushing",30,50);
  text("Left Arrow= Eating",30,70);
  text("Right Arrow= Bathing",30,90);
  text("m Key = Moving",30,110);

  edges = createEdgeSprites();
  astro.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
  astro.addAnimation("brushing", brushimg)
    astro.changeAnimation("brushing");
    astro.y =350;
    astro.velocityX=0;
    astro.velocityY=0;
  }
 if(keyDown("LEFT_ARROW")){
   astro.addAnimation("eating", eatimg);
   astro.changeAnimation("eating");
  
 }

 if(keyDown("m")){
   astro.addAnimation("moving", moveimg);
   astro.changeAnimation("moving");
   astro.velocityX=1;
   astro.velocityY=1;
 }

 if(keyDown (RIGHT_ARROW)){
   astro.addAnimation("bathing", bathimg);
   astro.changeAnimation("bathing");
 }
}
