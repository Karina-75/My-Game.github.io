var canvas, bg, coins;
var backgroundImage, coinImage;
var ground;
var runningGirlAnimation, runningGirl;

function preload() {
    backgroundImage = loadImage("./Images/MergedImages.png");
    runningGirlAnimation = loadAnimation("./Images/Running Girl 2.png", "./Images/Running Girl 3.png","./Images/Running Girl 4.png");
    coinImage = loadImage("./Images/Gold coins.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bg = createSprite(windowWidth / 2, windowHeight / 2, 4000, height);
    bg.addImage("bg", backgroundImage);
    bg.velocityX = -4;

    ground = createSprite(width / 2, height - 100, width, 4);

    runningGirl = createSprite(90, height - 200);
    runningGirl.addAnimation("Girl", runningGirlAnimation);
    runningGirl.scale = 0.5;
    runningGirl.velocityY = 4;

    coins = new Group();
}

function draw() {
    background(255);
    fill("pink");
    textSize(20);
    text("My Game", width / 2 - 50, 50)

    if (bg.x < -500) {
        console.log("Width is less than 1000..")
        bg.x = width;
    }

    if (keyDown("space")) {
        runningGirl.velocityY = -12;
    }

    runningGirl.velocityY = runningGirl.velocityY + 0.5;

    runningGirl.collide(ground);
    spawnCoins();
    drawSprites();


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnCoins() {
    if (frameCount % 100 == 0) {
        var y = random(200, 500);
        var coin = createSprite(width, y, 20, 20);
        coin.addImage("coin", coinImage);
        coin.velocityX = -6;
        coin.scale = 0.1;
        coins.add(coin);
    }
}