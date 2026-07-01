import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(1);

  return (
    <>
      <Post
        value={1}
        setValue={setValue}
        style={{ color: value === 1 ? "red" : "black" }}
      />
      <Post
        value={2}
        setValue={setValue}
        style={{ color: value === 2 ? "red" : "black" }}
      />
      <Post
        value={3}
        setValue={setValue}
        style={{ color: value === 3 ? "red" : "black" }}
      />
      <Post
        value={4}
        setValue={setValue}
        style={{ color: value === 4 ? "red" : "black" }}
      />
    </>
  );
}

function Post(props) {
  return (
    <button
      style={props.style}
      onClick={() => props.setValue(props.value)}
    >
      Task {props.value}
    </button>
  );
}

export default App;