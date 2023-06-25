export const generateUsers = (amount) => [...Array(amount)].map((_, i) => ({
    key: `user_${i}`,
    points: 0
}))