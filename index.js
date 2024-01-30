let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards= [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBJ = false
let isalive = true
let message =""
let messageEl = document.getElementById("message-el")
let SumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}
function renderGame(){
    if(sum<21){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack!"
        hasBJ = true
    }
    else{
        message="You're out of the game!"
        isalive = false    
    } 
    SumEl.textContent = "Sum: "+ sum
    cardsEl.textContent = "Cards: "
    for(let i =0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
}

function newCard(){
 let newCard = getRandomCard()
 sum += newCard
 cards.push(newCard)
 renderGame( )
}


function getRandomCard(){
    return Math.floor(Math.random()*13+1)
}