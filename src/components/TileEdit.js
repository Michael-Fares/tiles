import Tile from "./Tile";
function TileEdit({ state, handleColor, currentColor}) {
  return (
    <>
      <g id="tile-edit">
        <Tile state={state} handleColor={handleColor} currentColor={currentColor}/>
      </g>
    </>
  );
}
export default TileEdit;