
let cards= []
let sum = 0
let hasBJ = false
let isalive = false
let message =""
let messageEl = document.getElementById("message-el")
let SumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Tejas",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isalive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard 
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
    if(isalive===true && hasBJ===false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame( )
    }
 
}


function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13+1)
    if(randomNumber===1){
        return 11
    }
    else if(randomNumber>10){
        return 10
    }
    else{
        return randomNumber
    }
}