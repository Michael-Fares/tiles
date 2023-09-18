import Tile from "./Tile";
import { s } from "../constants";
function Tesselation({ pattern, state, colors, currentColor }) {
  return (
    <>
      <defs>
        <pattern
          id="pattern"
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          height={`${state.tileSize * 10}%`}
          width={`${state.tileSize * 10}%`}
        >
          <Tile pattern={pattern} state={state} currentColor={currentColor} colors={colors}/>
        </pattern>
      </defs>
      <rect
        width={`100%`}
        height={`100%`}
        fill="url(#pattern)"
        stroke="none"
      ></rect>
    </>
  );
}
export default Tesselation;
