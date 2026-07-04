// context api code

import './App.css'
import { createContext, useContext, useState } from 'react'

const CounterState = createContext();

function App() {
  const [count, setCount] = useState(0);

  console.log('whole app component re-rendered')

  return (
    <CounterState.Provider value={{ count, setCount }}>
      <Count />
      <Increase />
      <Decrease />
    </CounterState.Provider>
  )
}

function Count() {

  console.log('count re-rendered')
  const { count } = useContext(CounterState);

  return <h1>{count}</h1>;
}

function Increase() {

  console.log('increase re-rendered')
  const { setCount } = useContext(CounterState);

  return (
    <button onClick={() => setCount(cur => cur + 1)}>
      Increase
    </button>
  )
}

function Decrease() {
  console.log('decrease re-rendered')
  const { setCount } = useContext(CounterState);

  return (
    <button onClick={() => setCount(cur => cur - 1)}>
      Decrease
    </button>
  )
}

export default App


// so the problem is that context api's make the whole app and the other components re-render
// but using a state library such as recoil helps us do less re-renders by introducing
// concept of atoms and selector