import { lowerBound, normalPointsExtra, specialPointsExtra, upperBound } from "../constants";

export const getPointsFromBill = (bill) => {

    if (bill < lowerBound) return 0;

    let points = 0;

    if (bill >= upperBound) points += (lowerBound * normalPointsExtra);

    else return bill - lowerBound;

    return points + ((bill - upperBound) * specialPointsExtra);
}