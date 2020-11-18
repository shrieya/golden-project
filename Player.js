class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.x = 0;
        this.y = 0;

    }

    updatePlayerInfo(){
        var playerIndex = "players/player"+ this.index;
        database.ref(playerIndex).set({
            name : this.name,
            x : this.x,
            y : this.y
        })
    
    }

    getPlayerCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }

    updatePlayerCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}