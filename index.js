let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name : "Tinay",
    chips : 145   
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if (card === 1) { return 11
    } else if (card >= 11) {
        return 10
    } else {
        return card
    }
}

function startGame() {
    isAlive = true
    cards = []
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let counter = 0; counter < cards.length; counter += 1){
        cardsEl.textContent += cards[counter] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let drawnCard = getRandomCard()
        sum += drawnCard
        cards.push(drawnCard)
    }
    renderGame()
}
