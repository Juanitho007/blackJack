import { accumulatePoint, askCard, cardValue, createCard, winnerMessage } from "./index";


export const pcPlay = (deck, pointsPlayerTurn, playerPoints, divCardsPlayers, pointsHTML) => {
    let pcPoints = 0;
    do {
        const card = askCard(deck);
        const value = cardValue(card);
        pcPoints = accumulatePoint(value, playerPoints, playerPoints.length - 1, pointsHTML);
        const imgCard = createCard(card);
        divCardsPlayers[playerPoints.length - 1].append(imgCard);
    } while (pcPoints < pointsPlayerTurn && pointsPlayerTurn <= 21);
    winnerMessage(playerPoints);
};
