var canvas, bg, coins, bushes;
var backgroundImage, coinImage, bushImage;
var ground;
var runningGirlAnimation, runningGirl;
var score = 0;
var lives = 5;

function preload() {
    backgroundImage = loadImage("./Images/MergedImages.png");
    runningGirlAnimation = loadAnimation("./Images/Running Girl 1.png","./Images/Running Girl 2.png","./Images/Running Girl 3.png","./Images/Running Girl 4.png","./Images/Running Girl 5.png", "./Images/Running Girl 6.png", "./Images/Running Girl 7.png","./Images/Running Girl 8.png", "./Images/Running Girl 9.png","./Images/Running Girl 10.png");
    coinImage = loadImage("./Images/Gold coins.png");
    bushImage = loadImage("./Images/Bush image.png")
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bg = createSprite(windowWidth / 2, windowHeight / 2, 4000, height);
    bg.addImage("bg", backgroundImage);
    bg.velocityX = -4;

    ground = createSprite(width / 2, height - 100, width, 4);

    runningGirl = createSprite(90, height - 200);
    runningGirl.addAnimation("Girl", runningGirlAnimation);
    runningGirl.scale = 0.35;
    runningGirl.velocityY = 4;

    coins = new Group();
    bushes = new Group();
}

function draw() {
    background(255);
    fill("pink");
    textSize(20);
    text("My Game", width / 2 - 50, 50);
    text("Score: "+ score, width / 2 + 350, 50);

    if (bg.x < -500) {
        console.log("Width is less than 1000..")
        bg.x = width;
    }

    if (keyDown("UP_ARROW") && runningGirl.y >= 390) {
        runningGirl.velocityY = -12;
    }

    runningGirl.velocityY = runningGirl.velocityY + 0.5;

    runningGirl.collide(ground);
    spawnCoins();
    spawnBushes();
    
    runningGirl.overlap(coins, function(collector, collected){
        score = score + 1;
        collected.remove();
    })
    drawSprites();


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function spawnCoins() {
    if (frameCount % 100 == 0) {
        var y = random(200, 450);
        var coin = createSprite(width, y, 20, 20);
        coin.addImage("coin", coinImage);
        coin.velocityX = -6;
        coin.scale = 0.1;
        coins.add(coin);
    }
}

function spawnBushes() {
    if (frameCount % 200 == 0) {
        var bush = createSprite(width, height - 120, 20, 40);
        bush.addImage("bush", bushImage);
        bush.velocityX = -6;
        bush.scale = 0.1;
        bushes.add(bush);
    }
}