import { s } from "./patterns/pattern1/constants";
import "./app.css";
import Tesselation from "./components/Tesselation";
import TileEdit from "./components/TileEdit";
import Editor from "./components/Editor";
import { useState } from "react";

function App() {
  const [tesselation, setTesselation] = useState(false);
  /** lazy catch all state for everything */
  const [state, setState] = useState({
    lines: {
      color: "#FFFFFF",
      thickness: 5,
    },
    tileSize: 3
  });

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
        {tesselation ? "Mode: Tesselation" : "Mode : Tile Edit"}
      </button>

      <Editor
        tesselation={tesselation}
        state={state}
        handleLines={handleLines}
        handleTiles={handleTiles}
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
            <TileEdit state={state}  />
          )}
        </svg>
      </div>
    </div>
  );
}

export default App;
