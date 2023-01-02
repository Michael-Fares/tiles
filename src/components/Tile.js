import Shapes from "./Shapes";
import Lines from "./Lines";

function Tile({ state }) {
  return (
    <>
      <Shapes state={state} />
      {state.lines.thickness !== "0" && <Lines state={state} />}
    </>
  );
}

export default Tile;
