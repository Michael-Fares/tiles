import Tile from "./Tile";
import { s } from "../patterns/pattern1/constants";
function Tesselation({ state }) {
  return (
    <>
      <defs>
        <pattern
          id="pattern"
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          height={`${state.tileSize * 10}%`}
          width={`${state.tileSize * 10}%`}
        >
          <Tile state={state} />
        </pattern>
      </defs>

      <rect
        width={`100%`}
        height={`100%`}
        fill="url(#pattern)"
        stroke="black"
      ></rect>
    </>
  );
}
export default Tesselation;
