import "./App.css";
import Studants from "./components/studants";
import { useEffect, useState } from "react";

function App() {
  const [studantsList, setStudantsList] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => setStudantsList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Studants studantsList={studantsList} />
    </div>
  );
}

export default App;
