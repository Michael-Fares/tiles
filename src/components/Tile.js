import Shapes from "./Shapes";
import Lines from "./Lines";

function Tile({ pattern, state, handleColor, currentColor }) {
  return (
    <>
      <Shapes
        pattern={pattern}
        state={state}
        handleColor={handleColor}
        currentColor={currentColor}
      />
      {state.lines.thickness !== "0" && <Lines pattern={pattern} state={state} />}
    </>
  );
}

export default Tile;
