//Creates player object with a name, icon, if it's the current player, also houses a make move function.
function createPlayer(name, icon, current){
    const PlayerName = name;
    const PlayerIcon = icon;
    const currentPlayer = current;
    //This function accepts a input and translates it to the spot in the gameboard array.
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
    return {PlayerName, PlayerIcon, currentPlayer, makeMove}
}


//IIFE that creates the gameboard.
currentGame = (function(){
    const tiles = ["","","","","","","","",""];

    return {tiles};
})();


let postions = [];
function game(){
    let spots = document.querySelectorAll(".spots");
    let currentPlayerText = document.getElementById("currentPlayer");
    let playersMade = false
    function startGame(){
        if(playersMade == false){
            player1 = createPlayer(prompt("Enter player 1 name:"), "X",true, 0);
            player2 = createPlayer(prompt("Enter player 2 name:"), "O",false, 0);
            currentPlayerText.textContent = (`It's ${player1.PlayerName}s turn`);
            playersMade = true;
        }else{
            alert("Players already made, Refresh page to make new.");
        }
        
    }

    //make use of the onclick on the divs to make a move on the board and then switch witch players turn it is. also runs checkForWinner function.
    function makeMove(id){
        //This function passes in the element from the html document and this sets the postion to the id of that element witch it uses in the makeMove function
        //that is used in the player object
        let postion = id.id;
    
        if(player1.currentPlayer == true){
            player1.makeMove(postion);
            currentPlayerText.textContent = (`It's ${player2.PlayerName}s turn`)
            player1.currentPlayer = false;
            player2.currentPlayer = true;
            checkForWinner(player1.PlayerName, player1.PlayerIcon);
            render();
        }else if(player2.currentPlayer == true){
            player2.makeMove(postion);
            currentPlayerText.textContent = (`It's ${player1.PlayerName}s turn`)
            player1.currentPlayer = true;
            player2.currentPlayer = false;
            checkForWinner(player2.PlayerName ,player2.PlayerIcon);
            render();
        }
    }

    //Checks for winner by checking if all the possible wining spots are the same icons and also keeps
    //track of number of moves to see if there is a tie.
    function checkForWinner(player,Icon){
        let moveCounter = 0
        for(i = 0; i < currentGame.tiles.length; i++){
            if(currentGame.tiles[i] != ""){
                moveCounter++
            }
        }

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
            currentPlayerText.textContent = (`${player} is the winner`)
            let gameOver = true;
            render(gameOver);
         }else if(moveCounter == 9){
            currentPlayerText.textContent = (`Tie Game`)
            gameOver = true;
            render(gameOver);
         }
    }
    //Draws the players moves onto the board. Also disables possible moves when game is over.
    function render(gameOver){
        for(i = 0;i < spots.length; i++){
            spots[i].textContent = currentGame.tiles[i];
        }
        if(gameOver == true){
            for(i = 0;i < spots.length; i++){ 
                postions.push(spots[i].getAttribute("onclick"));
                spots[i].toggleAttribute("onclick");
            }
        }
    }
    //Resets the board array, re-enables buttons on board, and renders updated board.
    function reset(){
        for(i = 0;i < spots.length; i++){
            spots[i].setAttribute("onclick", postions[i]);
        }
        postions = [];
        gameOver = false;
        currentGame.tiles = ["","","","","","","","",""];
        player1.currentPlayer = true;
        player2.currentPlayer = false;
        currentPlayerText.textContent = (`It's ${player1.PlayerName}s turn`)
        render()
    }
    return {startGame, makeMove, checkForWinner, reset}
}
const testty = game();
