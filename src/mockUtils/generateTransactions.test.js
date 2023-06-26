import { generateTransactions } from "./generateTransactions";

describe("generateUsers", () => {
    beforeEach(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(1);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    test("is defined", () => {
        expect(generateTransactions).toBeDefined();
    });

    test("generates transactions", () => {
        const users = [{
            key: "user_0",
            points: 0
        }]

        const someTransaction =
        {
            userId: "user_0",
            bill: 201,
            date: new Date("2023-06-30T22:00:00.000Z")
        }

        expect(generateTransactions(users)).toContainEqual(someTransaction);
    });

});
