import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function addPetInfo(name, breed, pet) {
    setData([
      ...data,
      {
        name,
        breed,
        pet
      }
    ]);
  }

  return (
    <>
      {data.map((d, index) => (
        <div key={index}>
          Name: {d.name}, Breed: {d.breed}, Pet: {d.pet}
        </div>
      ))}

      <Form addPetInfo={addPetInfo} />
    </>
  );
}

function Form({ addPetInfo }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [pet, setPet] = useState("");

  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Breed"
        onChange={(e) => setBreed(e.target.value)}
      />

      <input
        placeholder="Pet"
        onChange={(e) => setPet(e.target.value)}
      />

      <button onClick={() => addPetInfo(name, breed, pet)}>
        Add
      </button>
    </>
  );
}

export default App;