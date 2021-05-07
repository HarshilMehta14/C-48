var myGameState = 0;
var myPlayerCount = 0;
var form,player,game;
var database, position;
var allPlayers;
var car1, car2, car3, car4, cars;
var track, bg, car1Img, car2Img, car3Img, car4Img;

function preload(){
    track = loadImage("images/track.jpg");
    bg = loadImage("images/track.png");

    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
}
function setup(){
    createCanvas(displayWidth-40, displayHeight-30);

    database = firebase.database();
   
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background(bg);
    
    if(myPlayerCount === 4){
        game.update(1);
    }
    
    if(myGameState === 1){
        clear ();
        game.play();
        
    }
    if(myGameState === 2){
        game.end();
    }
}