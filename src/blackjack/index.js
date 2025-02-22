import {
    createDeck, askCard, createCard,
    accumulatePoint,
    pcPlay,
    cardValue
} from './usecases'


let deck = [], playerPoints = [];
const types = ["C", "D", "H", "S"],
    specialCards = ["J", "Q", "K", "A"];

// Referencias HTML
const btnAsk = document.querySelector("#btnPedir"),
    btnStop = document.querySelector("#btnStop"),
    btnNewGame = document.querySelector("#btnNuevo"),
    pointsHTML = document.querySelectorAll("small"),
    divCardsPlayers = document.querySelectorAll(".divCards");

//App-Juego
const startGame = (numPlayer = 2) => {
    deck = createDeck(types, specialCards); //Inicia el juego
    playerPoints = [];
    for (let i = 0; i < numPlayer; i++) {
        pointsHTML[i].innerText = 0;
        divCardsPlayers[i].innerHTML = "";
        playerPoints.push(0);
    }
    btnAsk.disabled = false;
    btnStop.disabled = false;
};
startGame();

//Eventos
//Logica Nuevo Juego
btnNewGame.addEventListener("click", () => {
    startGame();
});
//Logica Pedir Carta
btnAsk.addEventListener("click", () => {
    const card = askCard(deck);
    const value = cardValue(card);
    const pointsPlayerTurn = accumulatePoint(value, playerPoints, 0, pointsHTML);
    const imgCard = createCard(card);
    divCardsPlayers[0].append(imgCard);
    if (pointsPlayerTurn >= 21) {
        btnAsk.disabled = true;
        btnStop.disabled = true;
        pcPlay(deck, pointsPlayerTurn, playerPoints, divCardsPlayers, pointsHTML);
    }
});
//Logica Detener Juego
btnStop.addEventListener("click", () => {
    btnAsk.disabled = true;
    btnStop.disabled = true;
    pcPlay(deck, playerPoints[0], playerPoints, divCardsPlayers, pointsHTML);
});

