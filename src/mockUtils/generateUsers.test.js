import { generateUsers } from "./generateUsers";

describe("generateUsers", () => {
    test("is defined", () => {
        expect(generateUsers).toBeDefined();
    });

    test("generates users 1", () => {
        const expected = [
            { key: "user_0", points: 0 },
            { key: "user_1", points: 0 },
            { key: "user_2", points: 0 },
            { key: "user_3", points: 0 },
            { key: "user_4", points: 0 },
        ];

        expect(generateUsers(5)).toStrictEqual(expected);
    });

    test("generates users 2", () => {
        const expected = [
            { key: "user_0", points: 0 },
            { key: "user_1", points: 0 },
            { key: "user_2", points: 0 }
        ];

        expect(generateUsers(3)).toStrictEqual(expected);
    });
});
