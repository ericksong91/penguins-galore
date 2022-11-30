import { React, useEffect, useState } from "react";
import "../../css/App.css";
import "../../css/PenguinList.css"
import Homepage from "../Homepage";
import PenguinList from "../PenguinsList";
import PenguinPage from "../PenguinPage";
import About from "../About";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [penguins, setPenguins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/penguins")
      .then((r) => r.json())
      .then((data) => setPenguins(data))
      .catch(() => alert("Error grabbing penguins!"))
  }, [])

  function handleNewSubmit(data) {
    console.log("Submitting new Penguins....");
    setPenguins([...penguins, data]);
  }

  function handleLikes(likedPenguin) {
    const updatedPenguins = penguins.map((peng) => {
      if (peng.id === likedPenguin.id) {
        return likedPenguin;
      } else {
        return peng
      }
    })

    setPenguins(updatedPenguins)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="penguins" element={<PenguinList penguins={penguins} onSubmit={handleNewSubmit}
          onLiked={handleLikes}/>} />
        <Route path="about" element={<About />} />
        <Route path="/penguins/:id" element={<PenguinPage penguins={penguins} onLiked={handleLikes} />} />
      </Routes>
    </div>
  );
}

export default App;
