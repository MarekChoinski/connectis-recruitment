import styles from "./main.module.scss";
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
    <div className={styles.main}>
      <div className={styles.buttonRow}>
        <button className={styles.button} onClick={() => fetchData(false)}>
          Fetch data
        </button>
        <button className={styles.button} onClick={() => fetchData(true)}>
          Fetch data (with error)
        </button>
      </div>
      {loading && <LoadingSpinner />}
      {dataError?.length ? <ErrorIndicatior message={dataError} /> : null}
      {users?.length && transactions?.length ? (
        <DataTable users={users} transactions={transactions} />
      ) : null}
    </div>
  );
};

export default App;
