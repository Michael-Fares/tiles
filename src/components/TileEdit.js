import Tile from "./Tile";
function TileEdit({ pattern, state, handleColor, currentColor }) {
  return (
    <>
      <g id="tile-edit">
        <Tile
          pattern={pattern}
          state={state}
          handleColor={handleColor}
          currentColor={currentColor}
        />
      </g>
    </>
  );
}
export default TileEdit;
