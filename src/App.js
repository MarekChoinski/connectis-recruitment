
import './App.css';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';

const fetchData = () => {
  console.log("x");
}

const App = () => {
  return (
    <div className="App">
      <button onClick={fetchData}>
        Fetch data
      </button>
      <LoadingSpinner />
    </div>
  );
}

export default App;
