import "./App.css";
import {useFetch} from "./useFetch";

function App() {
  const {data, isFetching} = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <>
      {isFetching ? "LOADING" : JSON.stringify(data)}
    </>
  );
}

export default App;