import { calculatePoints } from "./calculatePoints";

describe("calculatePoints", () => {
    test("is defined", () => {
        expect(calculatePoints).toBeDefined();
    });

    test("calculates", () => {

        const users = [{
            key: "user_0",
            points: 0
        }];

        const transactions = [
            { userId: 'user_0', bill: 195, date: new Date("2023-04-01T22:22:31.052Z") },
            { userId: 'user_0', bill: 42, date: new Date("2023-06-16T16:47:05.542Z") },
            { userId: 'user_0', bill: 101, date: new Date("2023-05-23T12:48:15.043Z") },
            { userId: 'user_0', bill: 50, date: new Date("2023-05-22T20:04:14.729Z") },
            { userId: 'user_0', bill: 178, date: new Date("2023-05-26T14:07:43.134Z") },
            { userId: 'user_0', bill: 65, date: new Date("2023-04-14T16:08:35.018Z") },
            { userId: 'user_0', bill: 153, date: new Date("2023-04-22T20:36:50.659Z") },
            { userId: 'user_0', bill: 85, date: new Date("2023-05-18T04:37:03.653Z") },
            { userId: 'user_0', bill: 57, date: new Date("2023-04-14T16:44:48.498Z") },
            { userId: 'user_0', bill: 15, date: new Date("2023-04-26T11:45:20.507Z") },
            { userId: 'user_0', bill: 96, date: new Date("2023-06-01T19:17:52.320Z") },
            { userId: 'user_0', bill: 14, date: new Date("2023-06-07T05:51:38.296Z") },
            { userId: 'user_0', bill: 198, date: new Date("2023-04-07T02:05:04.171Z") },
            { userId: 'user_0', bill: 82, date: new Date("2023-06-21T14:36:39.435Z") },
            { userId: 'user_0', bill: 164, date: new Date("2023-05-08T15:33:55.385Z") },
            { userId: 'user_0', bill: 125, date: new Date("2023-04-29T10:05:04.820Z") },
            { userId: 'user_0', bill: 33, date: new Date("2023-06-05T16:29:56.024Z") },
            { userId: 'user_0', bill: 147, date: new Date("2023-04-29T10:37:57.484Z") },
            { userId: 'user_0', bill: 50, date: new Date("2023-05-25T13:06:27.676Z") },
            { userId: 'user_0', bill: 156, date: new Date("2023-04-03T04:14:28.590Z") }
        ]

        const expected = "x"

        expect(calculatePoints(users, transactions)).toStrictEqual(expected);
    });
});
