var hero, hero_running;
var City, invisibleCity, CityImage;

var bird, bird2, bird3, bird4, bird5, bird6 ,birdsGroup, birdImage;



var newImage;

function preload(){
  
  cityImage = loadImage("building.png");
  cityImage.scale = 2
  
 birdImage=loadImage("bird.png")
 heroImage=loadImage("hero.png")
}

function setup() {
  createCanvas(600, 200);

  hero = createSprite(50,160,20,50);
 
  
  hero.scale = 1;
  
  cityImage = createSprite(50,50,400,20);
  cityImage.addImage("City",cityImage);
  cityImage.x = City.width /2;
  cityImage.velocityX = -4;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if (keyDown("up arrow"))
    hero.velocityY = -10;

  if (keyDown("down arrow")) 
  hero.velocityY=+10 
}
  
  hero.velocityY = hero.velocityY + 0.8
  
  if (City.x < 0){
    City.x = City.width/2;
  }
  
  trex.collide(invisibleCity);
  
  //spawn the clouds
  spawnCity();
  spawnBird();
  drawSprites();


function spawnCity() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    bird = createSprite(100,500,20,5);
    bird.addImage(birdImage)
    bird.y = Math.round(random(10,60))
    bird.scale = 0.4;
    bird.velocityX = -3;
   
    
    //assigning lifetime to the variable
    bird.lifetime = 400
    
         
    }
}
function spawnBird() {
console.log(frameCount)
if (frameCount % 60 === 0) {
bird=createSprite(600,165,40,10)
bird.velocityX = -3
var rand=Math.round(random(1,6))

switch(rand){
case 1:bird.addImage(bird1);
break;
case 2:bird2.addImage(bird2);
break;
case 3:bird3.addImage(bird3);
break;
case 4:bird4.addImage(bird4);
break;
case 5:bird5.addImage(bird5);
break;
case 6:bird6.addImage(bird6);
break;
default:break 


}
obstacle.scale=0.5
obstacle.lifetime=201


}


}
