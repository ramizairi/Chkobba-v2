
var targetScore = 11;
var selectedTableCardValue = null; // Store the value of the selected table card


const carreauxSrc = "Carr\\";
const heartSrc = "Coeu\\";
const spadesSrc = "Piqu\\";
const clubsSrc = "Tref\\";

const cards = [carreauxSrc, heartSrc, spadesSrc, clubsSrc];

var carreaux = ['01_of_diam.svg', '02_of_diam.svg', '03_of_diam.svg', '04_of_diam.svg', '05_of_diam.svg',
    '06_of_diam.svg', '07_of_diam.svg', 'Ja_of_diam.svg', 'Ki_of_diam.svg', 'Qu_of_diam.svg'];

var hearts = ['01_of_hear.svg', '02_of_hear.svg', '03_of_hear.svg', '04_of_hear.svg', '05_of_hear.svg',
    '06_of_hear.svg', '07_of_hear.svg', 'Ja_of_hear.svg', 'Ki_of_hear.svg', 'Qu_of_hear.svg'];

var spades = ['01_of_spad.svg', '02_of_spad.svg', '03_of_spad.svg', '04_of_spad.svg', '05_of_spad.svg',
    '06_of_spad.svg', '07_of_spad.svg', 'Ja_of_spad.svg', 'Ki_of_spad.svg', 'Qu_of_spad.svg'];

var clubs = ['01_of_club.svg', '02_of_club.svg', '03_of_club.svg', '04_of_club.svg', '05_of_club.svg',
    '06_of_club.svg', '07_of_club.svg', 'Ja_of_club.svg', 'Ki_of_club.svg', 'Qu_of_club.svg'];

console.log("Total Cards is ", cards.length)

// a --> jack 

// u --> queen

// i --> king

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
    console.log(targetScore)
    document.getElementById("popup-window").style.display = "none";
    document.getElementById("start-game-btn").addEventListener("click", startGame);

}
function setOption(value) {
    // Your code to handle the option
    console.log("Option selected:", value);
    document.getElementById("targetvalue").textContent = value;

}
function showPopup() {
    const popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "visible";
    }
}
/*-------------------------------------------------*/

var randomNumber, randomNumberCard;
var AllCard = 40;

//------------------------------------------------
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
//------------------------------------------------

var botCardValues = [null, null, null];
var BotCards, PlayerCards, TableCards;
var botEatedCards = [];
var playerEatedCards = [];
var PlayerTurn = true;
var playerscore = 0;
var botscore = 0;
var bermila = 0;
var pbermila = 0;
var bhaya = 0
var bdineri = 0;
// Player & Bot HANDS

function init() {
    CalculateScore();
    if (AllCard <= 0) {

        alert("Testtttt");
        document.getElementById('id01').style.display = 'block';
        AllCard = 40;
        return;
        //window.close();
    }


    //Bot Cards
    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    botCardValues[0] = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    console.log("botCardValues[0]", botCardValues[0])
    img1.src = "back.svg";

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    botCardValues[1] = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    console.log("botCardValues[1]", botCardValues[1])
    img2.src = "back.svg";

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    botCardValues[2] = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    console.log("botCardValues[2]", botCardValues[2])
    img3.src = "back.svg";

    //Player Cards
    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    img5.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    img6.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    img7.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

}


// Table Cards

function Table() {

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle1.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle2.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle3.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle4.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;
}
//Start The game
init();
Table();

function CalculateScore() {
    // Carta
    if (playerEatedCards.length > botEatedCards.length) playerscore = playerscore + 1;
    else botscore = botscore + 1;

    //Bermila
    for (i = 0; i < playerEatedCards.length; i++) {
        if (playerEatedCards[i] === 7 || playerEatedCards[i] === 6) bermila = bermila + 1;
    }
    if (bermila > 4) {
        playerscore = playerscore + 1;
        pbermila = 1;
    } else if (bermila < 4) botscore = botscore + 1;

    //El haya
    for (i = 0; i < botEatedCards.length; i++) {
        if (botEatedCards[i] === 'Carr\\07_of_diam.svg') bhaya = 1;
    }
    if (bhaya = 1) botscore = botscore + 1;
    else playerscore = playerscore + 1;

    //Dineri
    for (i = 0; i < botEatedCards.length; i++) {
        if (botEatedCards[i].includes('Carr')) bdineri = bdineri + 1;
    }
    if (bdineri > 5) botscore = botscore + 1;
    else if (bdineri < 5) playerscore = playerscore + 1;
/*
    if (playerscore > targetScore) {
        alert("Vous avez gagnez !");
    } else if (botscore > targetScore) {
        alert("Vous avez perdu !");
    } */
}

// gives new cards to players
var jaria = 2;
var round = 2;
function restart() {
    if (jaria < 5) {
        if (isHandEmpty(BotCards) && isHandEmpty(PlayerCards)) {
            init(); // Redistribute cards if both hands are empty

            for (var i = 0; i < 3; i++) {
                $("#card" + (i + 1)).fadeIn();
                $("#card_" + (i + 1)).fadeIn();
            }

            updatePlayerHands();
            
            document.getElementById("jarianumber").textContent = jaria;
            jaria = jaria + 1;
        }
    } else {
        jaria = 0;
        document.getElementById("jarianumber").textContent = jaria;
        alert("Round over !")
        document.getElementById("roundnumber").textContent = round;
        round = round + 1;
        playerEatedCards = [];
        botEatedCards = [];
        bermila = 0;
        pbermila = 0;
        bhaya = 0
        bdineri = 0;
    }
}

function isHandEmpty(hand) {
    return hand.every(card => card === "Removed" || card === undefined);
}

function updatePlayerHands() {
    BotCards = [img1.src[img1.src.length - 13], img2.src[img2.src.length - 13], img3.src[img3.src.length - 13]];
    PlayerCards = [img5.src[img5.src.length - 13], img6.src[img6.src.length - 13], img7.src[img7.src.length - 13]];

    search(BotCards);
    search(PlayerCards);
}


/*
console.log("carreaux - > " + carreaux);
console.log("hearts -> " + hearts);
console.log("spades -> " + spades);
console.log("clubs -> " + clubs);*/

// add the random card to players and mekle arrays

BotCards = [botCardValues[0][botCardValues[0].length - 13], botCardValues[1][botCardValues[1].length - 13], botCardValues[2][botCardValues[2].length - 13]];
console.log("Bot Cards -> " + BotCards);

PlayerCards = [img5.src[img5.src.length - 13], img6.src[img6.src.length - 13], img7.src[img7.src.length - 13]];
console.log("Player Cards -> " + PlayerCards);

Table = [mekle1.src[mekle1.src.length - 13], mekle2.src[mekle2.src.length - 13], mekle3.src[mekle3.src.length - 13], mekle4.src[mekle4.src.length - 13]];
console.log("Table Cards -> " + Table);


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
search(Table);
/*
console.log(BotCards);
console.log(PlayerCards);
console.log(Table);*/

var mekleDisplay = document.querySelector("#mekle");
var bool;

// Remove cards if one of the players eat "UI"
function display(i, j, playerCards, cardId) {
    $("#" + cardId).fadeOut("slow");
    playerCards[i] = "Removed";
    Table[j] = "Removed";
    $("#mekle" + j).fadeOut("slow");
    bool = false;
    search(Table);
}


// Put the card on the table : For the bot
function addBotNode(i, j, id, playerCards, cardId, direction) {
    Table.push(playerCards[i]);
    playerCards[i] = "Removed";
    document.querySelector("#" + cardId).style.display = "none";
    var node = document.createElement("img");
    node.setAttribute("src", botCardValues[i]);
    node.setAttribute("id", "mekle" + j);
    node.classList.add("tablecards");
    node.classList.add("w3-animate-" + direction);
    mekleDisplay.appendChild(node);
    search(Table);
}

// Put the card on the table : For the Player
function addNode(i, j, id, playerCards, cardId, direction) {
    var image = document.getElementById(id);
    Table.push(playerCards[i]);
    playerCards[i] = "Removed";
    document.querySelector("#" + cardId).style.display = "none";
    var node = document.createElement("img");
    node.setAttribute("src", image.src);
    node.setAttribute("id", "mekle" + j);
    node.classList.add("tablecards");
    node.classList.add("w3-animate-" + direction);
    mekleDisplay.appendChild(node);
    search(Table);
}

function BotAttack(botcard_i, botcard_id) {
    if (!PlayerTurn) {
        bool = true;
        var cardId = "card" + (botcard_i + 1);
        for (var j = 0; j < Table.length; j++) {
            if (BotCards[botcard_i] == Table[j]) {
                var x = Number(BotCards[botcard_i]);
                var y = Number(Table[j]);
                botEatedCards.push(botCardValues[botcard_i]); // Full source of bot's card
                botEatedCards.push(Table[j]);
                display(botcard_i, j, BotCards, cardId);
                break;
            }
            for (var k = j + 1; k < Table.length; k++) {
                if (Number(Table[j]) + Number(Table[k]) == BotCards[botcard_i]) {
                    var x1 = Number(BotCards[botcard_i]);
                    var y1 = Number(Table[j]);
                    var z1 = Number(Table[k]);
                    /*
                    botEatedCards.push(x1, y1, z1); */
                    botEatedCards.push(botCardValues[botcard_i]); // Full source of bot's card
                    botEatedCards.push(Table[j]);
                    botEatedCards.push(Table[k]);
                    display(botcard_i, j, BotCards, "card" + (botcard_i + 1));
                    display(botcard_i, k, BotCards, "card" + (botcard_i + 1));
                    bool = false;
                    break;
                }
            }
        }
        botEatedCards = botEatedCards.filter(item => item !== 'Removed');
        console.log("Bot Total Eated Cards : ", botEatedCards)
        if (bool) {
            addBotNode(botcard_i, j, botcard_id, BotCards, cardId, "top");
        }
    }
    //remove highlight if exist selected cards
    var selectedCards = document.querySelectorAll('.tablecards.selected-card');
    selectedCards.forEach(card => card.classList.remove('selected-card'));
    PlayerTurn = true;
    restart();
}

function botPlay() {
    var botCardIndex = decideBotMove();
    var botCardId = "card" + (botCardIndex + 1);
    BotAttack(botCardIndex, botCardId);
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
        var playerCardValue = Number(PlayerCards[i]); // Convert the player card value to a number

        if (playerCardValue === sumselectedcards) {
            // The player's card matches the sum of selected table cards
            playerEatedCards.push(playerCardValue); // Add the player card to the eated cards

            // Process each selected table card
            var selectedCards = document.querySelectorAll('.tablecards.selected-card');
            selectedCards.forEach(card => {
                var cardIndex = card.id.replace('mekle', '');
                playerEatedCards.push(Number(Table[cardIndex]));
                // Use display function to remove card
                display(i, cardIndex, PlayerCards, id);

            });

        } else {
            // Player card does not match the sum
            // Drop the player's card on the table
            addNode(i, Table.length, id, PlayerCards, "card_" + (i + 1), "bottom");

        }

        // Clear all current selections
        var selectedCards = document.querySelectorAll('.tablecards.selected-card');
        selectedCards.forEach(card => card.classList.remove('selected-card'));
        sumselectedcards = 0;
        PlayerTurn = false;
        // Logic for bot's turn...
        setTimeout(botPlay, 1000);
        restart();
    }
}


var sumselectedcards = 0;
// This function now takes the event as a parameter
function selectTableCard(event) {
    // Check if the clicked element is a card
    if (event.target.classList.contains('tablecards')) {
        // Extract the card index from the card's id
        var cardIndex = event.target.id.replace('mekle', '');
        var tableCardValue = Number(Table[cardIndex]); // Convert the card value to a number

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

document.addEventListener('DOMContentLoaded', function() {
    // Attach the event listener to the parent container of the table cards
    var mekleContainer = document.getElementById('mekle');
    if (mekleContainer) {
        mekleContainer.addEventListener('click', selectTableCard);
    }
});


function removeSelectedTableCard() {
    // Find the index of the table card that matches the selected value
    var indexToRemove = Table.findIndex(value => Number(value) === selectedTableCardValue);
    if (indexToRemove !== -1) {
        // Remove the card from the Table array
        Table.splice(indexToRemove, 1);
        // Remove the card element from the UI
        var cardElement = document.getElementById("mekle" + indexToRemove);
        if (cardElement) {
            cardElement.style.display = "none"; // Or use any other method to remove the element
        }
    }
}

// choose a random file

function choseCard(r) {
    var chose;
    switch (r) {
        case 0:
            chose = carreaux;
            break;
        case 1:
            chose = hearts;
            break;
        case 2:
            chose = spades;
            break;
        case 3:
            chose = clubs;
            break;
    }
    return chose;

}
