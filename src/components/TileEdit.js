import Tile from "./Tile";
function TileEdit({state}) {
  return (
    <>
      <g id="tile-edit">
        <Tile state={state}/>
      </g>
    </>
  );
}
export default TileEdit;