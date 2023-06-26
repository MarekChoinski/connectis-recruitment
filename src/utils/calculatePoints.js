// inprogress

import { getPointsFromBill } from "./getPointsFromBill";

export const calculatePoints = (users, transactions) => users.map(user => {
    const transactionsOfUser = transactions.filter(transaction => transaction.userId === user.key);

    return ({
        key: user.key,
        date: user.date,
        points: transactionsOfUser.reduce(
            (accumulator, currentValue) => accumulator + getPointsFromBill(currentValue.bill),
            user.points
        )
    })

});
