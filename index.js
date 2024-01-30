let firstCard = 9
let secondCard = 21
let sum = firstCard + secondCard
let hasBJ = false
let isalive = true
let message =""

function startGame(){
    if(sum<21){
        message="Do you want to draw a new card? 🙂"
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBJ = true
    }
    else{
        message="You're out of the game! 😭"
        isalive = false    
    } 
    
    console.log(message)
}

