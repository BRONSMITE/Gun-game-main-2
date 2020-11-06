var ak47;
var BulletGrp = createGroup();
var targetGrp = createGroup();
function preload() {

AK47 = loadImage("AK47.png");
BulletK = loadImage("Ibullet.png")
sprite = loadImage("sprite.png")
backgroundImg = loadImage("bg.jpg")
}


function setup() {
 createCanvas (displayWidth,displayHeight);

ak47 = createSprite(111,1,50,50)
ak47.addImage(AK47);
ak47.scale=0.4;

}

function draw() {
  background(backgroundImg);  
  
  ak47.y = World.mouseY
  if(keyDown("left") ){
 bullets();
  }
target();
 
if(BulletGrp.isTouching(targetGrp)  ){
targetGrp.destroyEach()

}  

  drawSprites();
}

function bullets () {
  
Bullet = createSprite(171,10,50,50)
Bullet.y = ak47.y
Bullet.velocityX = 160
Bullet.addImage(BulletK);
Bullet.scale = 0.1
console.log(Bullet.x)
BulletGrp.add(Bullet)

}
function target () {
  if (frameCount % 100 ===0){
var obstacle = createSprite(displayWidth-49.99,12,40,40);
obstacle.addImage(sprite)
obstacle.scale = 0.05
obstacle.velocityY = 15;
targetGrp.add(target);
  }
}