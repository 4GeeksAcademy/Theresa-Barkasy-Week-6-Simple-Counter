function calculateSeconds (aCounter, placeValue) {
    return Math.floor(aCounter / placeValue) % 10;
};

export default calculateSeconds;