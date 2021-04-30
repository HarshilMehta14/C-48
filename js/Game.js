class Game{
    constructor(){

    }
    //getting info from database
    getState(){
        var gamestateref = database.ref("GameState");
        gamestateref.on("value",function(data){
            myGameState = data.val();

        })
    }

    //updating the database
    update(state){
        database.ref('/').update({
            GameState:state
        })
    }

    async start(){
        if(myGameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("Count").once("value");
            if(playerCountRef.exists()){
                myPlayerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide_Elements();
        
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            //var displayPosition = 130;
            var index = 0;
            var x = 0, y;
            for(var i in allPlayers){

                index = index + 1;
                x = x+200;
                y = displayHeight - allPlayers[i].Distance;

                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }

            }
        }

        if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance = player.distance + 50;
            player.update();
            
        }

        drawSprites();
    }
}