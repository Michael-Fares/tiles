import Shapes from "./Shapes";
import Lines from "./Lines";

function Tile({ state, handleColor, currentColor }) {
  return (
    <>
      <Shapes
        state={state}
        handleColor={handleColor}
        currentColor={currentColor}
      />
      {state.lines.thickness !== "0" && <Lines state={state} />}
    </>
  );
}

export default Tile;
