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
    console.log("img1.src ",img1.src)

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    botCardValues[1] = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    img2.src = "back.svg";

    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    botCardValues[2] = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
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

function mekle() {



    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle1.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;
    //choseCard(randomNumberCard).splice(randomNumber,1);


    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle2.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    //choseCard(randomNumberCard).splice(randomNumber,1);


    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle3.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;

    //choseCard(randomNumberCard).splice(randomNumber,1);


    randomNumberCard = Math.ceil(Math.random() * cards.length) - 1;
    randomNumber = Math.ceil(Math.random() * carreaux.length) - 1;
    mekle4.src = cards[randomNumberCard] + choseCard(randomNumberCard)[randomNumber];
    AllCard--;
    // choseCard(randomNumberCard).splice(randomNumber,1);

}


init();

mekle();





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

BotCards = [img1.src[img1.src.length - 13], img2.src[img2.src.length - 13], img3.src[img3.src.length - 13]];
console.log("player 1 -> " + BotCards);

PlayerCards = [img5.src[img5.src.length - 13], img6.src[img6.src.length - 13], img7.src[img7.src.length - 13]];
console.log("player 2 -> " + PlayerCards);

mekle = [mekle1.src[mekle1.src.length - 13], mekle2.src[mekle2.src.length - 13], mekle3.src[mekle3.src.length - 13], mekle4.src[mekle4.src.length - 13]];
console.log("makle -> " + mekle);


function search(playerCards) {

    for (var i = 0; i < playerCards.length; i++) {
        switch (playerCards[i]) {
            case '0': playerCards[i] = '10';
                break;
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
search(mekle);

console.log(BotCards);
console.log(PlayerCards);
console.log(mekle);

var BotTurn = true;
var PlayerTurn = false;

var mekleDisplay = document.querySelector("#mekle");
var bool;


function display(i, j, playerCards, cardId) {
    $("#" + cardId).fadeOut("slow");
    playerCards[i] = "Removed";
    mekle[j] = "Removed";
    $("#mekle" + j).fadeOut("slow");
    bool = false;
    search(mekle);
}


function addNode(i, j, id, playerCards, cardId, direction) {
    var image = document.getElementById(id);
    console.log("Ceci est l'",image)
    mekle.push(playerCards[i]);
    playerCards[i] = "Removed";
    document.querySelector("#" + cardId).style.display = "none";
    var node = document.createElement("img");
    node.setAttribute("src", image.src);
    node.setAttribute("id", "mekle" + j);
    node.classList.add("tablecards");
    node.classList.add("w3-animate-" + direction);
    mekleDisplay.appendChild(node);
    search(mekle);
}

function addBotNode(i, j, id, playerCards, cardId, direction) {
    var image = document.getElementById(id);
    mekle.push(playerCards[i]);
    playerCards[i] = "Removed";
    document.querySelector("#" + cardId).style.display = "none";
    var node = document.createElement("img");
    node.setAttribute("src", image.src);
    node.setAttribute("id", "mekle" + j);
    node.classList.add("tablecards");
    node.classList.add("w3-animate-" + direction);
    mekleDisplay.appendChild(node);
    search(mekle);
}

function BotAttack(i, id) {
    if (BotTurn) {
        bool = true;
        var cardId = "card" + (i + 1);
        console.log("Card id is ", cardId)
        for (var j = 0; j < mekle.length; j++) {
            if (BotCards[i] == mekle[j]) {
                var cardId = "card" + (i + 1);
                console.log("Is eating...")
                display(i, j, BotCards, cardId);
                break;
            }
            for (var k = j + 1; k < mekle.length; k++) {
                
                console.log("Place card on table")
                if (Number(mekle[j]) + Number(mekle[k]) == BotCards[i]) {
                    $("#card" + (i + 1)).fadeOut("slow");
                    BotCards[i] = "Removed";
                    mekle[j] = "Removed";
                    $("#mekle" + j).fadeOut("slow");
                    mekle[k] = "Removed";
                    $("#mekle" + k).fadeOut("slow");
                    bool = false;
                    break;
                }
            }
        }
        if (bool) {
            console.log("IS BOLLLLLLLL")
            addNode(i, j, id, BotCards, cardId, "top");
        }
    }
    BotTurn = false;
    PlayerTurn = true;
    restart();
}



function PlayerAttack(i, id) {
    if (PlayerTurn) {
        bool = true;
        var cardId = "card_" + (i + 1);
        for (var j = 0; j < mekle.length; j++) {
            if (PlayerCards[i] == mekle[j]) {
                var cardId = "card_" + (i + 1);
                display(i, j, PlayerCards, cardId);
                break;
            }
            for (var k = j + 1; k < mekle.length; k++) {
                if (Number(mekle[j]) + Number(mekle[k]) == PlayerCards[i]) {
                    $("#card_" + (i + 1)).fadeOut("slow");
                    PlayerCards[i] = "Removed";
                    mekle[j] = "Removed";
                    $("#mekle" + j).fadeOut("slow");
                    mekle[k] = "Removed";
                    $("#mekle" + k).fadeOut("slow");
                    bool = false;
                    break;
                }
            }
        }
        if (bool) {
            addNode(i, j, id, PlayerCards, cardId, "bottom");
        }
    }
    BotTurn = true;
    PlayerTurn = false;
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
