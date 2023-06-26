import "./App.css";
import { DataTable } from "./components/DataTable/DataTable";
import { ErrorIndicatior } from "./components/ErrorIndicatior/ErrorIndicatior";
import { LoadingSpinner } from "./components/LoadingSpinner/LoadingSpinner";
import { useFetchTransactions } from "./hooks/useFetchTransactions";

const App = () => {
  const {
    fetchData,
    loading,
    transactions,
    users,
    error: dataError,
  } = useFetchTransactions();

  return (
    <div className="App">
      <button onClick={() => fetchData(false)}>Fetch data</button>
      <button onClick={() => fetchData(true)}>Fetch data (with error)</button>
      {loading && <LoadingSpinner />}
      {dataError?.length ? <ErrorIndicatior x={dataError} /> : null}
      {users?.length && transactions?.length ? (
        <DataTable users={users} transactions={transactions} />
      ) : null}
    </div>
  );
};

export default App;
