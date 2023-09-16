import { s } from "./patterns/pattern1/constants";
import "./app.css";
import Tesselation from "./components/Tesselation";
import TileEdit from "./components/TileEdit";
import Editor from "./components/Editor";
import { useState } from "react";
/** New pattern import scheme testing */
import PATTERN_1 from "./patterns/pattern1";

// DELETE THIS - for POC testing only
import { PATTERN_2 } from "./patterns/pattern1/paths";

function App() {
  // add default colors needed to start with new schema
  const DEFAULT_COLORS = [
    "darkgreen",
    "lightgreen",
    "#4169e1",
    "orange",
    "tomato",
    "yellow",
    "white",
  ];
  /** Setting should remain at app level only */
  const [pattern, setPattern] = useState(PATTERN_1);
  /** Should remain at app level only */

  const [tesselation, setTesselation] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FFFFFF");
  /** lazy catch all state for everything */
  const [state, setState] = useState({
    lines: {
      color: "#FFFFFF",
      thickness: 5,
    },
    tileSize: 3,
    /** test is this can be set dynamically */
    shapeColors: pattern.shape_paths.map((shape, i) => {
      return shape?.isEdge
        ? {
            [`${shape.name}`]: Array(1).fill(DEFAULT_COLORS[i]),
          }
        : {
            [`${shape.name}`]: Array(shape.count).fill(DEFAULT_COLORS[i]),
          };
    }),
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

  const handleColor = (e, shapeIndex, shapeName, colorIndex = 0) => {
    e.preventDefault();
    setState((prevState) => {
      let newState = { ...prevState };
      newState.shapeColors[shapeIndex][shapeName][colorIndex] = currentColor;
      return newState;
    });
  };
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
          <br /> Drawn with d3.js and React, based on the{" "}
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
        {/* <button className="download btn-warning" onClick={() => setPattern(PATTERN_2)}>
            change
      </button> */}
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
              handleColor={handleColor}
              currentColor={currentColor}
            />
          )}
        </svg>
      </div>
    </div>
  );
}

export default App;
