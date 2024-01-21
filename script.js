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



// a --> jack 

// u --> queen

// i --> king



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



// Player & Bot HANDS

function init() {

    if (AllCard <= 0) {

        //alert("le jeux est termine");
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
    console.log("botCardValues[2]", botCardValues[2])
    img2.src = "back.svg";

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    botCardValues[2] = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    console.log("botCardValues[3]", botCardValues[3])
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
// gives new cards to players

function restart() {
    if (isHandEmpty(BotCards) && isHandEmpty(PlayerCards)) {
        init(); // Redistribute cards if both hands are empty

        for (var i = 0; i < 3; i++) {
            $("#card" + (i + 1)).fadeIn();
            $("#card_" + (i + 1)).fadeIn();
        }

        updatePlayerHands();
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



console.log("carreaux - > " + carreaux);
console.log("hearts -> " + hearts);
console.log("spades -> " + spades);
console.log("clubs -> " + clubs);

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

console.log(BotCards);
console.log(PlayerCards);
console.log(Table);

var BotTurn = true;
var PlayerTurn = false;

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
    bool = true;
    var cardId = "card" + (botcard_i + 1);
    for (var j = 0; j < Table.length; j++) {
        if (BotCards[botcard_i] == Table[j]) {
            var x = Number(PlayerCards[i]);
            var y = Number(Table[j]);
            botEatedCards.push(x, y);
            var cardId = "card" + (botcard_i + 1);
            display(botcard_i, j, BotCards, cardId);
            break;
        }
        for (var k = j + 1; k < Table.length; k++) {
            var x1 = Number(PlayerCards[i]);
            var y1 = Number(Table[j]);
            var z1 = Number(Table[k])
            if (Number(Table[j]) + Number(Table[k]) == BotCards[botcard_i]) {
                botEatedCards.push(x1, y1, z1);
                $("#card" + (botcard_i + 1)).fadeOut("slow");
                BotCards[botcard_i] = "Removed";
                Table[j] = "Removed";
                $("#mekle" + j).fadeOut("slow");
                Table[k] = "Removed";
                $("#mekle" + k).fadeOut("slow");
                bool = false;
                break;
            }
        }
    }
    botEatedCards = botEatedCards.filter(item => !Number.isNaN(item));

    if (bool) {
        addBotNode(botcard_i, j, botcard_id, BotCards, cardId, "top");
    }
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
        bool = true;
        var cardId = "card_" + (i + 1);
        for (var j = 0; j < Table.length; j++) {
            if (PlayerCards[i] == Table[j]) {
                var x = Number(PlayerCards[i]);
                var y = Number(Table[j]);
                playerEatedCards.push(x, y);
                var cardId = "card_" + (i + 1);
                display(i, j, PlayerCards, cardId);
                break;
            }
            for (var k = j + 1; k < Table.length; k++) {
                var x1 = Number(PlayerCards[i]);
                var y1 = Number(Table[j]);
                var z1 = Number(Table[k])
                if (Number(Table[j]) + Number(Table[k]) == PlayerCards[i]) {
                    playerEatedCards.push(x1, y1, z1);
                    $("#card_" + (i + 1)).fadeOut("slow");
                    PlayerCards[i] = "Removed";
                    Table[j] = "Removed";
                    $("#mekle" + j).fadeOut("slow");
                    Table[k] = "Removed";
                    $("#mekle" + k).fadeOut("slow");
                    //Bool means he can't eat
                    bool = false;
                    break;
                }
            }
        }
        playerEatedCards = playerEatedCards.filter(item => !Number.isNaN(item));
        console.log("Filtred array", playerEatedCards)
        if (bool) {
            addNode(i, j, id, PlayerCards, cardId, "bottom");
        }
    }
    PlayerTurn = false;
    //Settimeout function to wait 1s "1000ms" before the bot turn
    setTimeout(botPlay, 1000);
    restart();
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
