var targetScore = 11;
var selectedTableCardValue = null; // Store the value of the selected table card
var deck = [];
var BotCards, PlayerCards, TableCards;
var botEatedCards = [];
var playerEatedCards = [];
var PlayerTurn = true;
var playerscore = 0;
var botscore = 0;
var bermila = 0;
var pbermila = 0;
var phaya = 0
var pdineri = 0;
var playerlasteat = true;
var pchkeyb = 0;
var bchkeyb = 0;

var img1 = document.querySelector("#card1");
var img2 = document.querySelector("#card2");
var img3 = document.querySelector("#card3");

var img5 = document.querySelector("#card_1");
var img6 = document.querySelector("#card_2");
var img7 = document.querySelector("#card_3");

var mekle1 = document.querySelector("#mekle0");
var mekle2 = document.querySelector("#mekle1");
var mekle3 = document.querySelector("#mekle2");
var mekle4 = document.querySelector("#mekle3");



//----------------------------PopUp start game
window.onload = function () {
    openPopup();
};

function openPopup() {
    startGame();
    document.getElementById("popup-window").style.display = "block";
}
function startGame() {
    // Get the value of the selected radio button
    var selectedValue = document.querySelector('input[name="option"]:checked').value;
    targetScore = parseInt(selectedValue, 10);
    //console.log(targetScore)
    document.getElementById("popup-window").style.display = "none";
    document.getElementById("start-game-btn").addEventListener("click", startGame);

}
function setOption(value) {
    // Your code to handle the option
    //console.log("Option selected:", value);
    document.getElementById("targetvalue").textContent = value;

}
function showPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "visible";
    }
}
/*-------------------------------------------------*/


// Player & Bot HANDS init
function init() {
    // Deal cards to players
    let { player1Cards, player2Cards } = dealHands(deck);
    BotCards = player1Cards;
    PlayerCards = player2Cards;
    // Set card images for bot (back of cards)
    img1.src = "back.svg";
    img2.src = "back.svg";
    img3.src = "back.svg";

    // Set card images for player
    img5.src = PlayerCards[0];
    img6.src = PlayerCards[1];
    img7.src = PlayerCards[2];
}

// Table Cards
function InitTable() {
    // Assuming the deck is still available here
    TableCards = dealTable(deck);

    // Set card images for table
    mekle1.src = TableCards[0];
    mekle2.src = TableCards[1];
    mekle3.src = TableCards[2];
    mekle4.src = TableCards[3];
}


//Start The game
deck = initializeDeck();
init();
InitTable();

function CalculateScore() {
    //clear the bot hand "delete the 'Removed' word"

    console.log("Bot eated cards : ", botEatedCards)
    console.log("Player eated cards : ", playerEatedCards)
    // Carta
    if (playerlasteat) {
        for (var j = 0; j < TableCards.length; j++) {
            search(TableCards);
            playerEatedCards.push(TableCards[j]);
            TableCards[j] = "Removed";
            $("#mekle" + j).fadeOut("slow");
            search(TableCards);
        }
    } else {
        for (var j = 0; j < TableCards.length; j++) {
            search(TableCards);
            botEatedCards.push(TableCards[j]);
            TableCards[j] = "Removed";
            $("#mekle" + j).fadeOut("slow");
            search(TableCards);
        }
    }

    botEatedCards = botEatedCards.filter(item => item !== 'Removed');
    playerEatedCards = playerEatedCards.filter(item => item !== 'Removed');
    console.log("Player last eat cards = ", playerEatedCards);
    console.log("Bot last eat cards = ", botEatedCards);

    if (deck.length === 0) {
        //Carta
        if (playerEatedCards.length > botEatedCards.length) playerscore = playerscore + 1;
        else botscore = botscore + 1;

        //Bermila
        for (i = 0; i < playerEatedCards.length; i++) {
            if (getCardValue(playerEatedCards[i]) === 7 || getCardValue(playerEatedCards[i]) === 6) bermila = bermila + 1;
        }
        if (bermila > 4) {
            playerscore = playerscore + 1;
            pbermila = 1;
        } else if (bermila < 4) botscore = botscore + 1;

        //El haya
        for (i = 0; i < playerEatedCards.length; i++) {
            if (playerEatedCards[i] === 'Carr\\07_of_diam.svg') phaya = 1;
        }
        if (phaya === 1) playerscore = playerscore + 1;
        else botscore = botscore + 1;

        //Dineri
        for (i = 0; i < playerEatedCards.length; i++) {
            if (playerEatedCards[i].includes('Carr')) pdineri = pdineri + 1;
        }
        if (pdineri > 5) playerscore = playerscore + 1;
        else if (pdineri < 5) botscore = botscore + 1;
    }
}


// gives new cards to players
var jaria = 1;
var round = 2;

function restart() {
    if (isHandEmpty(BotCards) && isHandEmpty(PlayerCards)) {

        jaria = jaria + 1;
        document.getElementById("jarianumber").textContent = jaria;

        init(); // Redistribute cards if both hands are empty

        for (var i = 0; i < 3; i++) {
            // Init cards animation "fade in"
            $("#card" + (i + 1)).fadeIn();
            $("#card_" + (i + 1)).fadeIn();
        }

        updatePlayerHands();

    }
}
function initnextround() {
    jaria = 1;
    document.getElementById("jarianumber").textContent = jaria;
    init(); // Redistribute cards if both hands are empty

    for (var i = 0; i < 3; i++) {
        // Init cards animation "fade in"
        $("#card" + (i + 1)).fadeIn();
        $("#card_" + (i + 1)).fadeIn();
    }

    updatePlayerHands();
    TableCards = [];
    TableCards = dealTable(deck);
    mekle1.src = TableCards[0];
    mekle2.src = TableCards[1];
    mekle3.src = TableCards[2];
    mekle4.src = TableCards[3];
    // Make sure the elements are visible
    $("#mekle0, #mekle1, #mekle2, #mekle3").fadeIn();

    console.log("Table Cards Are : ", mekle1.src, mekle2.src, mekle3.src, mekle4.src);

}
function isHandEmpty(hand) {
    return hand.every(card => card === "Removed" || card === undefined);
}


//Give new cards to players
function updatePlayerHands() {
    try {

        PlayerCards = [img5.src[img5.src.length - 13], img6.src[img6.src.length - 13], img7.src[img7.src.length - 13]];
        search(PlayerCards);

        BotCards = [img1.src[BotCards[0].length - 13], img2.src[BotCards[1].length - 13], img3.src[BotCards[3].length - 13]];
        search(BotCards);


    } catch (error) {
    }
}



// Convert the values
function search(playerCards) {
    for (var i = 0; i < playerCards.length; i++) {
        switch (playerCards[i]) {
            case 'a': playerCards[i] = '9';
                break;
            case 'u': playerCards[i] = '8';
                break;
            case 'i': playerCards[i] = '10';
                break;
        }
    }
}

search(BotCards);
search(PlayerCards);
search(TableCards);

var mekleDisplay = document.querySelector("#mekle");
var bool;

// Remove cards if one of the players eat "UI"
function display(i, j, playerCards, cardId) {
    $("#" + cardId).fadeOut("slow");
    playerCards[i] = "Removed";
    TableCards[j] = "Removed";
    $("#mekle" + j).fadeOut("slow");
    bool = false;
    search(TableCards);
}


// Put the card on the table : For the bot
function addBotNode(i, j, playerCards, cardId, direction) {
    TableCards.push(playerCards[i]);
    var card = playerCards[i];
    playerCards[i] = "Removed";
    document.querySelector("#" + cardId).style.display = "none";
    var node = document.createElement("img");
    node.setAttribute("src", card);
    node.setAttribute("id", "mekle" + j);
    node.classList.add("tablecards");
    node.classList.add("w3-animate-" + direction);
    mekleDisplay.appendChild(node);
    search(TableCards);
}



// Put the card on the table : For the Player
function addNode(i, j, id, playerCards, cardId, direction) {
    var image = document.getElementById(id);
    TableCards.push(playerCards[i]);
    playerCards[i] = "Removed";
    document.querySelector("#" + cardId).style.display = "none";
    var node = document.createElement("img");
    node.setAttribute("src", image.src);
    node.setAttribute("id", "mekle" + j);
    node.classList.add("tablecards");
    node.classList.add("w3-animate-" + direction);
    mekleDisplay.appendChild(node);
    search(TableCards);
}

function BotAttack(botcard_i) {
    if (!PlayerTurn) {
        var botCardValue = getCardValue(BotCards[botcard_i])
        // bool = false means he can eat
        bool = true;
        var canEat = false;
        var cardId = "card" + (botcard_i + 1);
        var j = 0;

        while (j < TableCards.length || canEat === true) {
            if (botCardValue == getCardValue(TableCards[j])) {
                botEatedCards.push(BotCards[botcard_i]);
                botEatedCards.push(TableCards[j]);
                display(botcard_i, j, BotCards, cardId);
                bool = false;
                canEat = true;
                playerlasteat = false;
                if (TableCards.length === 0) {
                    bchkeyb = bchkeyb + 1;
                    console.log("Player Chakkeb, total chkeyb : ", bchkeyb)
                } 
                break;
            }

            var k = j + 1;
            while (k < TableCards.length || canEat === true) {
                if (getCardValue(TableCards[j]) + getCardValue(TableCards[k]) === botCardValue) {
                    botEatedCards.push(BotCards[botcard_i]);
                    botEatedCards.push(TableCards[j]);
                    botEatedCards.push(TableCards[k]);
                    display(botcard_i, j, BotCards, "card" + (botcard_i + 1));
                    display(botcard_i, k, BotCards, "card" + (botcard_i + 1));
                    canEat = true;
                    bool = false;
                    playerlasteat = false;
                    if (TableCards.length === 0) {
                        bchkeyb = bchkeyb + 1;
                        console.log("Player Chakkeb, total chkeyb : ", bchkeyb)
                    }
                    break;
                }
                k++;
            }

            if (bool === false) {
                break; // Exit the outer loop if a match is found
            }
            j++;
        }
        console.log("Bot Total Eated Cards : ", botEatedCards)
        if (bool) {
            addBotNode(botcard_i, j, BotCards, cardId, "top");
        }
    }

    checkRoundEnd();
    //remove highlight if exist selected cards
    var selectedCards = document.querySelectorAll('.tablecards.selected-card');
    selectedCards.forEach(card => card.classList.remove('selected-card'));
    PlayerTurn = true;
}

function botPlay() {
    var botCardIndex = decideBotMove();
    BotAttack(botCardIndex);
}

function decideBotMove() {
    // Simple strategy: play the first available card
    for (var i = 0; i < BotCards.length; i++) {
        if (BotCards[i] !== "Removed") {
            return i;
        }
    }
    return 0; // Default case, should not usually happen
}

function PlayerAttack(i, id) {
    if (PlayerTurn) {
        var playerCardValue = getCardValue(PlayerCards[i]); // Convert the player card value to a number
        console.log("Player card value ", playerCardValue)
        if (playerCardValue === sumselectedcards) {
            // The player's card matches the sum of selected table cards
            playerEatedCards.push(PlayerCards[i]); // Add the player card source to the eated cards

            // Process each selected table card
            var selectedCards = document.querySelectorAll('.tablecards.selected-card');
            selectedCards.forEach(card => {
                var cardIndex = card.id.replace('mekle', '');
                playerEatedCards.push(TableCards[cardIndex]); // Add the table card source to the eated cards
                // Use display function to remove card
                display(i, cardIndex, PlayerCards, id);
                playerlasteat = true


            });
            if (TableCards.length === 0) {
                pchkeyb = pchkeyb + 1;
                console.log("Player Chakkeb, total chkeyb : ", pchkeyb)
            }
            console.log("Player eated cards ", playerEatedCards)
        } else {
            // Player card does not match the sum
            // Drop the player's card on the table
            addNode(i, TableCards.length, id, PlayerCards, "card_" + (i + 1), "bottom");
        }
        // Clear all current selections
        var selectedCards = document.querySelectorAll('.tablecards.selected-card');
        selectedCards.forEach(card => card.classList.remove('selected-card'));
        sumselectedcards = 0;
        PlayerTurn = false;
        // Logic for bot's turn...
        setTimeout(botPlay, 1000);
    }
    checkRoundEnd();
}


var sumselectedcards = 0;
// This function now takes the event as a parameter
function selectTableCard(event) {
    // Check if the clicked element is a card
    if (event.target.classList.contains('tablecards')) {
        // Extract the card index from the card's id
        var cardIndex = event.target.id.replace('mekle', '');
        var tableCardValue = getCardValue(TableCards[cardIndex]);
        // Check if the clicked card is already selected
        if (event.target.classList.contains('selected-card')) {
            // Card is already selected, remove selection and subtract its value from sum
            event.target.classList.remove('selected-card');
            sumselectedcards -= tableCardValue;
        } else {
            // Card is not selected, add selection and add its value to sum
            event.target.classList.add('selected-card');
            sumselectedcards += tableCardValue;
        }

        selectedTableCardValue = tableCardValue; // Set the global variable
        console.log("Selected Table Card Value:", selectedTableCardValue);
        console.log("Sum of selected cards :", sumselectedcards);

        if (sumselectedcards > 10) {
            alert("Sum of selected cards is greater than 10");
            // Reset the sum and clear all selections
            sumselectedcards = 0;
            var selectedCards = document.querySelectorAll('.tablecards.selected-card');
            selectedCards.forEach(card => card.classList.remove('selected-card'));
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Attach the event listener to the parent container of the table cards
    var mekleContainer = document.getElementById('mekle');
    if (mekleContainer) {
        mekleContainer.addEventListener('click', selectTableCard);
    }
});


function removeSelectedTableCard() {
    // Find the index of the table card that matches the selected value
    var indexToRemove = TableCards.findIndex(value => Number(value) === selectedTableCardValue);
    if (indexToRemove !== -1) {
        // Remove the card from the Table array
        TableCards.splice(indexToRemove, 1);
        // Remove the card element from the UI
        var cardElement = document.getElementById("mekle" + indexToRemove);
        if (cardElement) {
            cardElement.style.display = "none"; // Or use any other method to remove the element
        }
    }
}

function updateScores() {

    // Update player scores
    document.getElementById("p-haya").textContent = phaya;
    document.getElementById("p-bermila").textContent = pbermila;
    document.getElementById("p-carta").textContent = playerEatedCards.length;
    document.getElementById("p-dineri").textContent = 10 - pdineri;
    document.getElementById("p-chkeyb").textContent = pchkeyb;

    // Update bot scores
    document.getElementById("b-haya").textContent = 1 - phaya;
    document.getElementById("b-bermila").textContent = 1 - pbermila;
    document.getElementById("b-carta").textContent = 40 - playerEatedCards.length;
    document.getElementById("b-dineri").textContent = 10 - pdineri;
    document.getElementById("b-chkeyb").textContent = bchkeyb;

    // Update totals
    document.getElementById("playerscore").textContent = playerscore;
    document.getElementById("botscore").textContent = botscore;
}

// My new logic impliment-------------------------
function initializeDeck() {
    const suits = ['diam', 'hear', 'spad', 'club'];
    const cards = ['01', '02', '03', '04', '05', '06', '07', 'Ja', 'Ki', 'Qu'];

    let deck = [];
    suits.forEach(suit => {
        cards.forEach(card => {
            // Use template literals for clarity and proper escaping
            deck.push(`${suit}/${card}_of_${suit}.svg`);
        });
    });

    // Shuffle the deck
    shuffleDeck(deck);
    return deck;
}
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
function dealCard(deck) {
    //pop removes the last element from an array and returns that element. "exist method in js"
    return deck.pop();
}

function checkRoundEnd() {
    //console.log("Deck : ", deck);

    if (deck.length <= 6) {
        deck.pop();
        console.log("Deck in the last jaria : ", deck);
    }
    if (deck.length === 0) {
        CalculateScore();
        confirmandupdate();

    } else {
        restart();
    }
}
function confirmandupdate() {
    updateScores();
    document.getElementById("roundnumber").textContent = round;

    // Resetting for a new game round
    deck = initializeDeck(); // Reinitialize the deck for a new round
    BotCards = [];
    PlayerCards = [];
    TableCards = [];
    botEatedCards = [];
    playerEatedCards = [];
    PlayerTurn = true; // Assuming the player always starts
    bermila = 0;
    pbermila = 0;
    bhaya = 0;
    bdineri = 0;

    startNewRound();
}

function startNewRound() {
    if (playerscore >= targetScore || botscore >= targetScore) {
        // Game over, one of the scores has reached the target
        endGame();
        alert("GAME OVER");
    } else {
        alert("Round over, check score")
        // Prepare for the next round
        round++;
        document.getElementById("roundnumber").textContent = round;

        // Clear out the old hands and table cards
        BotCards = [];
        PlayerCards = [];
        TableCards = [];

        // Start the new round
        setTimeout(initnextround, 1000);
    }
}

function endGame() {
    // Implement game over logic
    console.log("Game Over. Final Scores - Player: ", playerscore, " Bot: ", botscore);
    // Possibly show a game over screen or message
}

// deal hands
function dealHands(deck) {
    let player1Cards = [];
    let player2Cards = [];

    // Deal 3 cards to each player
    for (let i = 0; i < 3; i++) {
        player1Cards.push(dealCard(deck));
        player2Cards.push(dealCard(deck));
    }

    return { player1Cards, player2Cards };
}

function dealTable(deck) {
    let tableCards = [];

    for (let i = 0; i < 4; i++) {
        tableCards.push(dealCard(deck));
    }
    return tableCards;
}
// tranform values
function getCardValue(cardName) {

    if (cardName === "Removed") {
        return 0; // Or handle this scenario appropriately
    }
    // Extract the number or face value from the card name
    let value = cardName.match(/(\d+|Ja|Qu|Ki)/)[0];

    switch (value) {
        case 'Ja': return 9; // Jack
        case 'Qu': return 8; // Queen
        case 'Ki': return 10; // King
        default: return parseInt(value); // Numeric value
    }
}
