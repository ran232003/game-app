import logo from "./logo.svg";
import "./App.css";
import MyForm from "./components/MyForm";
import TableGame from "./components/TableGame";

function App() {
  return (
    <div className="mainScreen">
      <TableGame />
      <MyForm />
    </div>
  );
}

export default App;
