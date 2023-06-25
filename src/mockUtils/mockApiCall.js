const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApiCall = async (func, delay = 2000) => {
    const result = func();

    await sleep(delay)

    return Promise.resolve(result);
}
