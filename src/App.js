import { s } from "./patterns/pattern1/constants";
import "./app.css";
import Tesselation from "./components/Tesselation";
import TileEdit from "./components/TileEdit";
import Editor from "./components/Editor";
import { useState } from "react";

function App() {
  const [tesselation, setTesselation] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FFFFFF')
  /** lazy catch all state for everything */
  const [state, setState] = useState({
    lines: {
      color: "#FFFFFF",
      thickness: 5,
      weave: false
    },
    tileSize: 3,
    petalColors: ["#4169e1", "#4169e1", "#4169e1", "#4169e1", "#4169e1", "#4169e1", "#4169e1", "#4169e1"],
    dartColors: ["lightgreen", "lightgreen", "lightgreen", "lightgreen", "lightgreen", "lightgreen", "lightgreen", "lightgreen"],
    sunColor: ["darkgreen"],
    octagonColor: ["tomato"],
    starColor: ["orange"]
        
  });
  
  const handleColor = (e, shape, i = 0) => {
     e.preventDefault();
     setState((prevState) => {
      let newState = { ...prevState };
      newState[shape][i] = currentColor;
      return newState;
    });
  }
  const handleLines = (e, property) => {
    e.preventDefault();
    setState((prevState) => {
      let newState = { ...prevState };
      newState.lines[property] = e.target.value;
      return newState;
    });
  };

  const handleTiles = (e) => {
    e.preventDefault();
    setState((prevState) => {
      let newState = { ...prevState };
      newState.tileSize = e.target.value;
      return newState;
    });
  };

  

  return (
    <div className="app">
      <h1>This is the app</h1>

      <button
        onClick={() => {
          setTesselation(!tesselation);
        }}
      >
        {tesselation ? "Back to tile edit mode" : "Tesselate tile!"}
      </button>

      <Editor
        tesselation={tesselation}
        state={state}
        setState={setState}
        handleLines={handleLines}
        handleTiles={handleTiles}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <div className="flex-row-center">
        <svg
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          height={tesselation ? `100%` : `50%`}
          width={tesselation ? `100%` : `50%`}
        >
          {tesselation ? (
            <Tesselation state={state} />
          ) : (
            <TileEdit state={state} handleColor={handleColor} currentColor={currentColor} />
          )}
        </svg>
      </div>
    </div>
  );
}

export default App;
