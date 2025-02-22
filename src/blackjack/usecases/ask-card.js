/**
 * 
 * @param {Array<string>} deck 
 * @returns {String}
 */
export const askCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw "No hay Cartas";
    }
    return deck.pop();
};