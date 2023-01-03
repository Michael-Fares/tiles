function Editor({ tesselation, state, handleLines, handleTiles }) {
  const colorDisabled = state.lines.thickness === "0";
  return (
    <div className="editor flex-column-start">
      <div className="tile-options flex-row-center">
        <div className="flex-row-center">
          <label for="lineColor" className={colorDisabled ? "disabled" : ""}>
            Line color:
          </label>
          <input
            name="lineColor"
            id="lineColor"
            type="color"
            value={colorDisabled ? "#FFFFFF" : state.lines.color}
            onChange={(e) => handleLines(e, "color")}
            disabled={colorDisabled}
          />
        </div>

        <div className="flex-row-center">
          <label for="lineWidth">Line Weight:</label>
          <input
            name="lineWidth"
            id="lineWidth"
            type="range"
            value={state.lines.thickness}
            min="0"
            max="50"
            onChange={(e) => handleLines(e, "thickness")}
          />
        </div>
      </div>
      {tesselation && (
        <div className="tessellation-options flex-row-center">
          <div className="flex-row-center">
            <label for="tileSize">Tile Size:</label>
            <input
              name="tileSize"
              id="tileSize"
              type="range"
              value={state.tileSize}
              min="2"
              max="5"
              step="0.5"
              onChange={(e) => handleTiles(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Editor;
