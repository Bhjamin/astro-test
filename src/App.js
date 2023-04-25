import "./App.css";
import AddToDo from "./components/AddToDo";
import ViewToDo from "./components/ViewToDo";
import { useState } from "react";

const App = () => {

  const [addedToDo, setAddedToDo] = useState(0)

  return (
    <div className="container1">
      <AddToDo addedToDo={addedToDo} setAddedToDo={setAddedToDo} />
      <ViewToDo addedToDo={addedToDo} setAddedToDo={setAddedToDo} />
    </div>
  );
};

export default App;
