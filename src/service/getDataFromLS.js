export const getDataFromLS = (LOKAL_STORAGE) => {
    const savedCards = localStorage.getItem(LOKAL_STORAGE);
    if (savedCards !== null) {
        const parsedCards = JSON.parse(savedCards);
        return parsedCards;
    }
    return [];
};