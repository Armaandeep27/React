import './App.css'
import React, { createContext, useContext, useState } from 'react';

const BulbContext = createContext();

function App() {

  const [bulbState, setBulbState] = useState(true);

  return (
    <BulbContext.Provider
      value={{
        bulbState,
        setBulbState
      }}
    >
      <Light />
    </BulbContext.Provider>
  );
}

function Light() {
  return (
    <>
      <LightBulb />
      <ToggleLight />
    </>
  );
}

function LightBulb() {
  const { bulbState } = useContext(BulbContext);

  return <h1>{bulbState ? "Bulb On" : "Bulb Off"}</h1>;
}

function ToggleLight() {
  const { bulbState, setBulbState } = useContext(BulbContext);

  function toggleBulb() {
    setBulbState(!bulbState);
  }

  return <button onClick={toggleBulb}>Toggle</button>;
}

export default App;

// very basic app made to understand the logic of contextApi's to avoid 
// prop dilling confusion 

// and if we talk about state rolling it is just that if some other component 
// needs the access of variables in some another component we can just roll the 
// state of that variable to the lowest ancestor of both of them and pass them
// the variables or create context so that they both can access them