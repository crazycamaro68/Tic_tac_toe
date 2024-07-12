function createPlayer(name, icon){
    const PlayerName = name;
    const PlayerIcon = icon;

    function makeMove([X,Y]){
        let postion = [X,Y];
        let Icon = PlayerIcon;
        switch (postion.join()){
            case "0,0":
                if(game1.tiles[0] === ""){
                game1.tiles.splice(0,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "1,0":
                if(game1.tiles[1] ===""){
                game1.tiles.splice(1,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "2,0":
                if(game1.tiles[2] ===""){
                game1.tiles.splice(2,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "0,1":
                if(game1.tiles[3] ===""){
                game1.tiles.splice(3,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "1,1":
                if(game1.tiles[4] ===""){
                game1.tiles.splice(4,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "2,1":
                if(game1.tiles[5] ===""){
                game1.tiles.splice(5,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "0,2":
                if(game1.tiles[6] ===""){
                game1.tiles.splice(6,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "1,2":
                if(game1.tiles[7] ===""){
                game1.tiles.splice(7,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "2,2":
                if(game1.tiles[8] ===""){
                game1.tiles.splice(8,1,Icon);
                }else{
                    console.log("Pick Again!");
                }
            break;
        }
    }
    return {PlayerName, PlayerIcon,makeMove}
}

function gameboard(){
    const tiles = ["","","","","","","","",""];
    return {tiles};
}

const Player1 = createPlayer("Paul","X");
const Player2 = createPlayer("Elyse", "O");
const game1 = gameboard();


