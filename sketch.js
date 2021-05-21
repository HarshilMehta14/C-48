//Universal variables
var GameState = 0;
var bg;

//Level 1 variables
var EnemySpaceship1, EnemySpaceship1Img;
var Player, PlayerImg;
var bullets, bulletsImg;
var Missiles, MissilesImg;
var EnemySpaceship1Grp, MissilesGrp, BulletsGrp;


function preload(){
    
}
function setup(){
    createCanvas(displayWidth-40, displayHeight-30);

    //The player Sprite and spaceship we'll add Image afterwards
    player = createSprite(width/2, height-50, 70, 70);
    player.shapeColor = "red";

    //Creating Groups For level1 variables
    EnemySpaceship1Grp = new Group();
    MissilesGrp = new Group();
    BulletsGrp = new Group();

    
}

function draw(){
    background(0);

    if(frameCount % 100 === 0){
        SpawnSpaceships1();
    }
    EnemySpaceship1Grp.setVelocityYEach = 2;
    EnemySpaceship1Grp.setLifetimeEach = 350;

    drawSprites();
}

function SpawnSpaceships1()
{
    var b = 50;
    for(var a = 0; a <= 7; a++)
    {
        console.log("hi");
        
        EnemySpaceship1 = createSprite(b, 50, 50, 50);
        b += 100;
        EnemySpaceship1.shapeColor = "blue";
        //EnemySpaceship1.scale
        EnemySpaceship1Grp.add(EnemySpaceship1);
        
    }
    //EnemySpaceship1Grp.setVelocityYEach = 2;
    //EnemySpaceship1Grp.setLifetimeEach = 350;
}