var myGameState = 0;
var myPlayerCount = 0;
var form,player,game;
var database, position;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
    createCanvas(displayWidth-40, displayHeight-30);

    database = firebase.database();
   
    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");
    
    if(myPlayerCount === 4){
        game.update(1);
    }
    
    if(myGameState === 1){
        clear ();
        game.play();
        
    }
}