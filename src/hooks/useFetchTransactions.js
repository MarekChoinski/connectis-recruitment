import { useState } from 'react';
import { mockApiCall } from '../mockUtils/mockApiCall';
import { generateUsers } from '../mockUtils/generateUsers';
import { generateTransactions } from '../mockUtils/generateTransactions';

export const useFetchTransactions = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [transactions, setTransactions] = useState(null);
    const [users, setUsers] = useState(null);

    const generateError = (message) => {
        setError(message);
        setIsLoading(false);
    }

    const fetchData = async (withError) => {
        setIsLoading(true);
        setUsers(null);
        setTransactions(null);
        setError(null);

        if (withError) {
            await mockApiCall(null, 700);
            generateError("Error while fetching data");
            return;
        }

        const users = await mockApiCall(generateUsers(10), 700);

        if (!users?.length) {
            console.log("xx");
            generateError("Error while fetching users");
            return;
        }

        const transactions = await mockApiCall(generateTransactions(users), 1100);

        if (!transactions?.length) {
            generateError("Error while fetching transactions");
            return;
        }

        setUsers(users);
        setTransactions(transactions);
        setIsLoading(false);
    }

    return {
        fetchData,
        loading: isLoading,
        transactions,
        users,
        error
    }
}