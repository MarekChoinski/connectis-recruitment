import { lowerBoundAmountOfTransactions, lowerBoundBill, mockEndMonth, mockStartMonth, mockYear, upperBoundAmountOfTransactions, upperBoundBill } from "../constants";

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomDate = (start, end) =>
    new Date(+start + Math.random() * (end - start));

export const generateTransactions = (users) => {
    const transactions = [];

    users.forEach(user => {
        const amountOfTransactions = getRandomInt(lowerBoundAmountOfTransactions, upperBoundAmountOfTransactions);
        const transactionsPerUser = [...Array(amountOfTransactions)].map((_) => ({
            userId: user.key,
            bill: getRandomInt(lowerBoundBill, upperBoundBill),
            date: randomDate(new Date(mockYear, mockStartMonth, 1), new Date(mockYear, mockEndMonth, 1))
        }))

        transactions.push(transactionsPerUser);
    })

    return transactions.flat();

};