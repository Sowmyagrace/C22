const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var box
function setup() {
  createCanvas(400,400);
  myengine=Engine.create();
  myworld=myengine.world;

  var options={
    isStatic:true
  }
  box=Bodies.rectangle(100,100,50,50,options);
  World.add(myworld,box);
  console.log(box.position);
  
}

function draw() {
  background(20); 
  Engine.update(myengine); 
  rectMode(CENTER);
 rect(box.position.x,box.position.y,50,50);
}