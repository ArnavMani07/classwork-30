const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit;

function preload()
{
  // loading images for game
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
  // creating sprite for bunny
  bunny = createSprite(250,650,100,100);
  // adding image to sprite
  bunny.addImage(rabbit);
  //scaling down bunny image
  bunny.scale = 0.2


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  // making images come to the center
  imageMode(CENTER);
  // creating image for button
  button = createImg("cut_button.png");
  //giving position to the button
  button.position(220,30);
  //resizing the button to fit the screen
  button.size(50,50);
  // making sure whenever you click rope breaks
  button.mouseClicked(arnav);
  
}

function draw() 
{
  background(51);
  // adding background image
  image(bg_img,width/2,height/2,490,690);
  // giving the image fruit position
  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  //ground.show();
  // making sure all sprites show up
  drawSprites()

 
   
}
// function for rope to break
function arnav(){
  // making sure rope breaks
  rope.break();
  // making the fruit detatch when broken
  fruit_con.detatch();
  // making the fruit null or empty
  fruit_con = null;
}
