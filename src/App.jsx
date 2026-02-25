import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name) return;

    const newStudent = {
      id: Date.now(),
      name: name
    };

    setStudents([...students, newStudent]);
    setName("");
  };

  return (
    <div>
      <h1>Student Manager</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;