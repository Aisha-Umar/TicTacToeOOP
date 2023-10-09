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

    setMarkX(){
        if(this.player == 'X'){
        const X = document.querySelector('.div1')
        X.addEventListener('click', () =>{
            X.textContent= this.markX
        })
    }
}

    countX(){

    }
}

class PlayerY extends Game{
    constructor(){
        super('Y')
        this.markY = 'Y'
    }

    countY(){

    }
}

let newGame = new Game()
let playerX = new PlayerX()
let playerY = new PlayerY()

const div1 = document.querySelector('.div1')
div1.addEventListener('click', () => {
    playerX.setMarkX()
})