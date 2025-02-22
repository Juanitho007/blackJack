/**
 * 
 * @param {string} card 
 * @returns {HTMLImageElement}
 */
export const createCard = (card) => {
    const imgCard = document.createElement("img");
    imgCard.src = `images/${card}.png`;
    imgCard.classList.add("cards-play");
    return imgCard
};