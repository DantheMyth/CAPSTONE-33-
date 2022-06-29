var bgIMG, bg; 
var snow, snowIMG; 

function preload(){
    bgIMG = loadImage("snow2.jpg"); 
    snowIMG = loadImage("snow4.webp");  
}


function setup() {
  createCanvas(800,400);
  bg = createSprite(0, 0, 800, 400);
  bg.addImage(bgIMG); 
  //bg.scale = 1.7; 
}

function draw() {
  background(255,255,255);  
  makesnow(); 
  drawSprites();
}

function makesnow(){
  if(frameCount%40===0){
    snow = createSprite(0,0,40,10); 
    snow.x  =Math.round(random(0,800)); 
    snow.lifetime = 300; 
    snow.addImage(snowIMG); 
    snow.velocityY = 2;  
    snow.scale = 0.1; 
  }
}