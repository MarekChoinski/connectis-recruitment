import { mockApiCall } from "./mockApiCall";

describe("mockApiCall", () => {
    test("is defined", () => {
        expect(mockApiCall).toBeDefined();
    });

    test("resolves", async () => {
        const func = (a, b) => a + b;
        const res = await mockApiCall(func(2, 3), 0);

        expect(res).toStrictEqual(5);
    });

});
