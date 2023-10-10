class Game{
    constructor(player){
        this.player = player
        
    }

    verticalMove(){

    }
    horizontalMove(){

    }
    diagonalMove(){

    }
    determineWinner(){

    }
   

}

class PlayerX extends Game{
    constructor(){
        super('X') 
        this.markX = 'X'
    }

    setMarkX(cell){
    
            cell.textContent= this.markX
    
}

    countX(){

    }
}

class PlayerY extends Game{
    constructor(){
        super('Y')
        this.markY = 'Y'
    }
    setMarkY(cell){
      
            cell.textContent= this.markY
 
    }
    countY(){

    }
}

let newGame = new Game()
let playerX = new PlayerX()
let playerY = new PlayerY()
let currentPlayer = playerX

const cells = document.querySelectorAll('.cell')

for(let cell of cells){
 cell.addEventListener('click', (e) => {
    if(e.target.textContent === ' '){
       currentPlayer.setMarkX(e.target)
       currentPlayer = currentPlayer === playerX ? playerY : playerX
     }
    })
}