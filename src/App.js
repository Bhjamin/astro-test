import './App.css';
import AddToDo from './components/addToDo'
import ViewToDo from './components/viewToDo'

function App() {
  return (
    <div className="App">
      <AddToDo/>
      <br/>
      <ViewToDo/>
    </div>
  );
}

export default App;
