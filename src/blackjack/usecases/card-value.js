/**
 * 
 * @param {string} c 
 * @returns {number}
 */

export const cardValue = (c) => {
    if (!c) {
        throw "No envió carta para extraer su valor";
    }
    const value = Number(c.slice(0, -1));
    return isNaN(value) ? (value === "A" ? 11 : 10) : value;
};
