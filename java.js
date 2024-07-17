function createPlayer(name, icon, current){
    const PlayerName = name;
    const PlayerIcon = icon;
    const currentPlayer = current;

    function makeMove(pos){
        let postion = pos;
        switch (postion){
            case "pos00":
                if(currentGame.tiles[0] === ""){
                currentGame.tiles.splice(0,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos10":
                if(currentGame.tiles[1] ===""){
                currentGame.tiles.splice(1,1,PlayerIcon);

                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos20":
                if(currentGame.tiles[2] ===""){
                currentGame.tiles.splice(2,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos01":
                if(currentGame.tiles[3] ===""){
                currentGame.tiles.splice(3,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos11":
                if(currentGame.tiles[4] ===""){
                currentGame.tiles.splice(4,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos21":
                if(currentGame.tiles[5] ===""){
                currentGame.tiles.splice(5,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos02":
                if(currentGame.tiles[6] ===""){
                currentGame.tiles.splice(6,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos12":
                if(currentGame.tiles[7] ===""){
                currentGame.tiles.splice(7,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
            case "pos22":
                if(currentGame.tiles[8] ===""){
                currentGame.tiles.splice(8,1,PlayerIcon);
                return currentGame.tiles;
                }else{
                    console.log("Pick Again!");
                }
            break;
        }
    }
    return {PlayerName, PlayerIcon,currentPlayer,makeMove}
}

function gameBoard(){
    const tiles = ["","","","","","","","",""];

    return {tiles};
}
//NEED to figure out how to store this in a object along with the players and share the info to makeMove Function.
const currentGame = gameBoard();


function startGame(){
    window.player1 = createPlayer(prompt("Enter player 1 name:"), "X",true);
    window.player2 = createPlayer(prompt("Enter player 2 name:"), "O",false);

    //Add render function to reset board? add comformaition before completion?

}
//Checks for winner by checking if all the possible wining spots are the same icons.
function checkForWinner(player,Icon){
    if(currentGame.tiles[0] == Icon && currentGame.tiles[1] == Icon && currentGame.tiles[2] == Icon ||
       currentGame.tiles[3] == Icon && currentGame.tiles[4] == Icon && currentGame.tiles[5] == Icon ||
       currentGame.tiles[6] == Icon && currentGame.tiles[7] == Icon && currentGame.tiles[8] == Icon ||
       currentGame.tiles[0] == Icon && currentGame.tiles[3] == Icon && currentGame.tiles[6] == Icon ||
       currentGame.tiles[1] == Icon && currentGame.tiles[4] == Icon && currentGame.tiles[7] == Icon ||
       currentGame.tiles[2] == Icon && currentGame.tiles[5] == Icon && currentGame.tiles[8] == Icon ||
       currentGame.tiles[0] == Icon && currentGame.tiles[4] == Icon && currentGame.tiles[8] == Icon ||
       currentGame.tiles[2] == Icon && currentGame.tiles[4] == Icon && currentGame.tiles[6] == Icon
    ){
        console.log(`Winner is ${player}`);
    }
}
//make use of the onclick on the divs to make a move on the board and then switch witch players turn it is. also checks for winner.
function makeMove(id){
    let postion = id.id;
    if(player1.currentPlayer == true){
        player1.makeMove(postion);
        console.log(currentGame.tiles);
        player1.currentPlayer = false;
        player2.currentPlayer = true;
        checkForWinner(player1.PlayerName, player1.PlayerIcon);
    }else if(player2.currentPlayer == true){
        player2.makeMove(postion);
        console.log(currentGame.tiles);
        player1.currentPlayer = true;
        player2.currentPlayer = false;
        checkForWinner(player2.PlayerName ,player2.PlayerIcon);
    }
}