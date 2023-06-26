const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApiCall = async (result, delay = 2000) => {
    await sleep(delay);

    return result;
}
