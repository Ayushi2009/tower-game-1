const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var ground ,ground1,ground2
function preload(){
  hexagonImg=loadImage("Untitled.png")
 
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(400,200.200,10);
  ground1 = new Ground(390,300,250,10);
  ground2 = new Ground(700,200,200,10);
 
 
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  blocks17 = new Block(640,175,30,40);
  blocks18 = new Block(670,175,30,40);
  blocks19= new Block(700,175,30,40);
  blocks20 = new Block(730,175,30,40);
  blocks21 = new Block(760,175,30,40);
  blocks22 = new Block(670,135,30,40);
  blocks23 = new Block(700,135,30,40);
  blocks24= new Block(730,135,30,40);
  blocks25= new Block(700,95,30,40);

  hexagon = Bodies.circle(50,200,20);
  World.add(world,hexagon);
  
  slingShot = new SlingShot(this.hexagon,{x:100,y:200});

}
function draw() {
  background("red"); 
 
  ground.display();
  ground1.display();
  ground2.display();
  strokeWeight(2);
  stroke(15);
  fill("yellow");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("purple");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks17.display();
  blocks18.display();
  blocks19.display();
  blocks20.display();
  blocks21.display();
  fill("yellow");
  blocks22.display();
  blocks23.display();
  blocks24.display();
  fill("pink")
  blocks25.display();
  
  slingShot.display();

  imageMode(CENTER)
  image(hexagonImg,hexagon.position.x,hexagon.position.y,40,40)
  drawSprites()
}
function mouseDragged(){
  Matter.Body.setPosition(this.hexagon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}



