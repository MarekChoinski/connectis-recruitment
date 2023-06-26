import { calculatePointsFromTransactions } from "./calculatePointsFromTransactions";
import { totalMonths } from "../constants";

export const splitByMonths = (transactions) => {
    const users = new Set(transactions.map(transaction => transaction.userId));
    const months = new Set(transactions.map(transaction => transaction.date.getMonth()));
    months.add(totalMonths);

    const splitted = {};

    // calculate per month
    users.forEach(user => {
        splitted[user] = {};

        months.forEach(month => {
            const transactionPerUserOnMonth = month === totalMonths ?
                transactions.filter(transaction => transaction.userId === user)
                : transactions.filter(transaction => transaction.date.getMonth() === month && transaction.userId === user);

            splitted[user][month] = calculatePointsFromTransactions(transactionPerUserOnMonth);
        })
    })

    return splitted;
}