let cardData = [
    { key: "one", value: "one" },
    { key: "two", value: "two" },
    { key: "three", value: "three" },
    { key: "four", value: "four" },
    { key: "five", value: "five" },
];

const setCardData = (updatedData) => {
    cardData = updatedData;
};

export { cardData, setCardData };