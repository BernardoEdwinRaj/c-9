var name  
var a=10
function setup() {
 
  createCanvas(400,400);
  
  name =createSprite (200,200,50,50)
  console.log ("in setup"+a)
}

function draw() 
{
  
  background(30,30,30);
  
console.log ("in draw"+a)

drawSprites()

}


