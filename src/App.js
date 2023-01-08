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
    petalColors: Array(8).fill('#4169e1'),
    dartColors: Array(8).fill('lightgreen'),
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
      <header className="app-header">
      <h1 className="text-center">Islamic Tesselation Generator</h1>
          <div className="d-flex align-items-center p-1">

          <button className="download">
            Download SVG!
          </button>
          </div>
      </header>
      

      <Editor
        tesselation={tesselation}
        setTesselation={setTesselation}
        state={state}
        setState={setState}
        handleLines={handleLines}
        handleTiles={handleTiles}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <div className="flex-row-center">
        <svg
          id="result"
          className={tesselation ? "tesselation" : "tile"}
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          // height={tesselation ? `100%` : `50%`}
          // width={tesselation ? `100%` : `50%`}
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
