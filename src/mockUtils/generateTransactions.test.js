import { generateTransactions } from "./generateTransactions";
import { generateUsers } from "./generateUsers";

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
            bill: 201
        }

        expect(generateTransactions(users)).toContainEqual(someTransaction);
    });

});
