export const accumulatePoint = (value, playerPoints, playerTurn, pointsHTML) => {
    playerPoints[playerTurn] += value;
    pointsHTML[playerTurn].innerText = playerPoints[playerTurn];
    return playerPoints[playerTurn];
};