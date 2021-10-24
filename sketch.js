var cat,cat1,cat2,cat3;
var mouse,mouse1,mouse2,mouse3,mouse4;
var bgImg;
function preload() {
    bgImg = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat3 = loadAnimation("cat4.png")
    mouse1 = loadAnimation("mouse1.png");
    mouse2 = loadAnimation("mouse2.png","mouse3.png");
    mouse4 = loadAnimation("mouse4.png");

    //load the images here
} 

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(870,600);
    cat.addAnimation("catSItting",cat1);
    cat.scale = 0.2;

    mouse = createSprite(470,600);
    mouse.addAnimation("mouseCheese",mouse1);
    mouse.scale = 0.2;

    

}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catsit",cat3);
        cat.addAnimation("catsit");
        cat.x = 300;
        cat.scale = 0.2;
    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      cat.velocity = -5;
  }


}
