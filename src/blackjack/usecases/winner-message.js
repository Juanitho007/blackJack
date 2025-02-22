export const winnerMessage = (playerPoints) => {
    const [minPoints, pcPoints] = playerPoints;
    setTimeout(() => {
        if (pcPoints === minPoints) {
            alert("Empataron, vuelve a jugar");
        } else if (pcPoints <= 21 && (minPoints > 21 || pcPoints > minPoints)) {
            alert("La pc ganó, tu perdiste");
        } else {
            alert("Ganaste, la pc perdió");
        }
    }, 500);
};