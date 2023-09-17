import Shapes from "./Shapes";
import Lines from "./Lines";

function Tile({ pattern, state, colors, handleColors, currentColor }) {
  return (
    <>
      <Shapes
        pattern={pattern}
        state={state}
        currentColor={currentColor}
        colors={colors}
        handleColors={handleColors}
      />
      {state.lines.thickness !== "0" && <Lines pattern={pattern} state={state} />}
    </>
  );
}

export default Tile;
