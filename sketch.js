var canvas, bg;
var backgroundImage;
var ground;
var runningGirlImage, runningGirl;

function preload() {
    backgroundImage = loadImage("./Images/MergedImages.png");
    runningGirlImage = loadImage("./Images/Running Girl 1.jpg");

}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    bg = createSprite(windowWidth /2, windowHeight /2, 4000, height);
    bg.addImage("bg", backgroundImage);
    bg.velocityX = -3;

    ground = createSprite(width/2, height - 100, width, 4);
    
}

function draw() {
    background(255);
    fill("pink");
    textSize(20);
    text("My Game", width/2 - 50, 50)

    if(bg.x < -500){
        console.log("Width is less than 1000..")
        bg.x = width;
    }

    drawSprites();


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}