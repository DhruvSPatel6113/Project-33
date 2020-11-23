const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var gameState="play";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    Engine.run(engine);
    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);

  textSize(20)
  text("Score : "+score,20,30);

  text(500 , 20 , 520);
  text(500 , 100 , 520);
  text(500 , 180 , 520);
  text(500 , 260 , 520);

  text(100 , 340 , 520);
  text(100 , 420 , 520);
  text(100 , 500 , 520);

  text(200 , 580 , 520);
  text(200 , 660 , 520);
  text(200 , 740 , 520);

  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(gameState==="play"){

   if(frameCount%60===0){

     particles.push(new Particle(random(width/2-370, width/2+395), 10,10));
     score++  
   
    }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
 
    }

}
 
    for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
 
    }
}