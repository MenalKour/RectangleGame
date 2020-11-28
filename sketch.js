var fixed,moving

function setup() {
  createCanvas(800,400);
  fixed=createSprite(200,200,100,50);
  fixed.shapeColor="green"
  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="green";
}

function draw() {
  background("black"); 
  console.log(moving.x-fixed.x)
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
    fixed.x-moving.x<moving.width/2+fixed.width/2&&
    moving.y-fixed.y<moving.width/2+fixed.width/2&&
    fixed.y-moving.y<moving.width/2+fixed.width/2){
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
   else{
 moving.shapeColor="green";
 fixed.shapeColor="green"
   }

   
  drawSprites();
}