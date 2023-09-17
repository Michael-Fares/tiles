import Tile from "./Tile";
function TileEdit({ pattern, colors, state, handleColors, currentColor }) {
  return (
    <>
      <g id="tile-edit">
        <Tile
          pattern={pattern}
          state={state}
          colors={colors}
          handleColors={handleColors}
          currentColor={currentColor}
        />
      </g>
    </>
  );
}
export default TileEdit;
