import { getPointsFromBill } from "./getPointsFromBill";

describe("getPointsFromBill", () => {
    test("is defined", () => {
        expect(getPointsFromBill).toBeDefined();
    });

    test("calculates", () => {
        expect(getPointsFromBill(120)).toStrictEqual(90);
        expect(getPointsFromBill(78)).toStrictEqual(28);
        expect(getPointsFromBill(48)).toStrictEqual(0);
        expect(getPointsFromBill(1000)).toStrictEqual(1850);
    });
});
