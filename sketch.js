
function preload() {
    bgImg=("images/garden.png")
    cat_walking=loadAnimation("images/cat3.png","images/cat2.png")
    mouse_teasing=loadAnimation("images/mouse1.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(950,750,50,50);
    cat.addAnimation("walking",cat_walking)
    cat.scale=0.5

    mouse = createSprite(200,750,50,50);
    mouse.addAnimation("walking",mouse_teasing)
    mouse.scale=0.5
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
