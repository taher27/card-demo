let d = new Date();
let timeString = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
let cardData = [
    { key: "one", value: timeString },
    { key: "two", value: timeString },
    { key: "three", value: timeString },
    { key: "four", value: timeString },
    { key: "five", value: timeString },
];

const setCardData = (updatedData) => {
    cardData = updatedData;
};

export { cardData, setCardData };