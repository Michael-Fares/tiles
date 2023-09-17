import { s } from "./constants";
import "./app.css";
import Tesselation from "./components/Tesselation";
import TileEdit from "./components/TileEdit";
import Editor from "./components/Editor";
import { useEffect, useState } from "react";

import PATTERN_1 from "./patterns/pattern1";
import PATTERN_2 from "./patterns/pattern2";

const PATTERNS = {
  base_pattern: PATTERN_1,
  variation_1: PATTERN_2
}

function App() {

  
  /** Setting should remain at app level only */
  const [pattern, setPattern] = useState(PATTERNS.base_pattern);
  /** Should remain at app level only */
  
  const [tesselation, setTesselation] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FFFFFF");
  /** lazy catch all state for everything */
  const [state, setState] = useState({
    lines: {
      color: "#FFFFFF",
      thickness: 5,
    },
    tileSize: 3
  });

  function downloadSVG() {
    const svg = document.getElementById("container").innerHTML;
    const blob = new Blob([svg.toString()]);
    const element = document.createElement("a");
    element.download = "my-awesome-art.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
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
        <p className="text-center">
          Design your own Islamic geometric tile and tesselation. Like what you
          see? Download it anytime as an SVG by clicking the button below.
          <br /> Drawn with d3.js and React, based on the {" "}
          <a
            href="https://www.youtube.com/watch?v=Cv7Sbuuo2X8"
            target="_blank"
            rel="noreferrer"
          >
            traditional method as demonstrated by Mohamad Aljanabi.
          </a>
        </p>
        <div className="d-flex align-items-center p-1">
          <button className="download" onClick={downloadSVG}>
            Download SVG!
          </button>
        </div>
        {/* <button className="download btn-warning" onClick={() => setPattern(PATTERNS.base_pattern)}>
            change
        </button> */}
        <label htmlFor="choose_pattern">
          Choose pattern:
        </label>
              <select id="choose_pattern" onChange={(e) => {
                  console.log(e.target.value)
                  setPattern(PATTERNS[e.target.value])
                }}>
                {Object.keys(PATTERNS).map(key => {
                  return (
                    <option value={key} key={key}>{key.replace("_"," ").toUpperCase()}</option>
                  )
                })}
              </select>
      </header>

      <Editor
        pattern={pattern}
        tesselation={tesselation}
        setTesselation={setTesselation}
        state={state}
        setState={setState}
        handleLines={handleLines}
        handleTiles={handleTiles}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <div id="container" className="flex-row-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={tesselation ? "tesselation" : "tile"}
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
        >
          {tesselation ? (
            <Tesselation pattern={pattern} state={state} />
          ) : (
            <TileEdit
              pattern={pattern}
              state={state}
              currentColor={currentColor}
            />
          )}
        </svg>
      </div>
    </div>
  );
}

export default App;
