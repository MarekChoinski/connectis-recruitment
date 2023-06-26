import { getPointsFromBill } from "./getPointsFromBill";

export const calculatePointsFromTransactions = (transactions) => transactions.reduce(
    (accumulator, currentValue) => accumulator + getPointsFromBill(currentValue.bill),
    0
);
