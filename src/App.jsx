import "./App.css";
import { DataTable } from "./components/DataTable/DataTable";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { useFetchTransactions } from "./hooks/useFetchTransactions";

const App = () => {
  const { fetchData, loading, transactions, users, error } =
    useFetchTransactions();

  return (
    <div className="App">
      <button onClick={() => fetchData(false)}>Fetch data</button>
      <button onClick={() => fetchData(true)}>Fetch data (with error)</button>
      {loading && <LoadingSpinner />}
      {error?.length ? <span>{error}</span> : null}
      {users?.length && transactions?.length ? (
        <DataTable users={users} transactions={transactions} />
      ) : null}
    </div>
  );
};

export default App;
