import { s } from "./patterns/pattern1/constants";
import "./app.css";
import Tesselation from "./components/Tesselation";
import TileEdit from "./components/TileEdit";
import Editor from "./components/Editor";
import { useState } from "react";

function App() {
  const [tesselation, setTesselation] = useState(false);

  const [state, setState] = useState({
    lines: {
      color: "#FFFFFF",
      thickness: 5,
    },
  });

  const handleLines = (e, property) => {
    e.preventDefault();
    setState((prevState) => {
      let newState = { ...prevState };
      newState.lines[property] = e.target.value;
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
      />

      <div className="flex-row-center">
        <svg
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          height={tesselation ? `100%` : `50%`}
          width={tesselation ? `100%` : `50%`}
        >
          {tesselation ? (
            <Tesselation state={state} handleLines={handleLines} />
          ) : (
            <TileEdit state={state} handleLines={handleLines} />
          )}
        </svg>
      </div>
    </div>
  );
}

export default App;
