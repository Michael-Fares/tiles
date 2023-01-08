import { s } from "./patterns/pattern1/constants";
import "./app.css";
import Tesselation from "./components/Tesselation";
import TileEdit from "./components/TileEdit";
import Editor from "./components/Editor";
import { useState } from "react";

function App() {
  const [tesselation, setTesselation] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FFFFFF");
  /** lazy catch all state for everything */
  const [state, setState] = useState({
    lines: {
      color: "#FFFFFF",
      thickness: 5,
      weave: false,
    },
    tileSize: 3,
    petalColors: Array(8).fill("#4169e1"),
    dartColors: Array(8).fill("lightgreen"),
    sunColor: ["darkgreen"],
    octagonColor: ["tomato"],
    starColor: ["orange"],
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

  const handleColor = (e, shape, i = 0) => {
    e.preventDefault();
    setState((prevState) => {
      let newState = { ...prevState };
      newState[shape][i] = currentColor;
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

      <div id="container" className="flex-row-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={tesselation ? "tesselation" : "tile"}
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
        >
          {tesselation ? (
            <Tesselation state={state} />
          ) : (
            <TileEdit
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
