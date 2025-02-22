import _ from 'underscore'
/**
 * Esta función crea un nuevo arreglo de cartas
 * @param {Array<string>} types 
 * @param {Array<string>} specialCards 
 * @returns {Array<string>}
 */
export const createDeck = (types, specialCards) => {
    if (!types || types.length === 0 || !specialCards || specialCards.length === 0) { throw new Error("Special card and cards are needed") }

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }
    for (let type of types) {
        for (let specialCard of specialCards) {
            deck.push(specialCard + type);
        }
    }
    return _.shuffle(deck);
};