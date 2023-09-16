import Tile from "./Tile";
import { s } from "../patterns/pattern1/constants";
function Tesselation({ pattern, state }) {
  return (
    <>
      <defs>
        <pattern
          id="pattern"
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          height={`${state.tileSize * 10}%`}
          width={`${state.tileSize * 10}%`}
        >
          <Tile pattern={pattern} state={state} />
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
