const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateTransactions = (users) => {

    const transactions = [];

    users.forEach(user => {
        const amountOfTransactions = getRandomInt(20, 50);

        const transactionsPerUser = [...Array(amountOfTransactions)].map((_, i) => ({
            userId: user.key,
            bill: getRandomInt(10, 200)
        }))

        transactions.push(transactionsPerUser);
    })

    return transactions.flat();

};