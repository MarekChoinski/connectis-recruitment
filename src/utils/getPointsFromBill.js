// TODO 50 and 100 and 2 and 1 should be in some constants folder

export const getPointsFromBill = (bill) => {

    if (bill < 50) return 0;

    let points = 0;

    if (bill >= 100) points += 50; //TODO: simplify?

    else return bill - 50;

    return points + ((bill - 100) * 2);
}