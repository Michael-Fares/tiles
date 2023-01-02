import Tile from "./Tile";
import { s } from "../patterns/pattern1/constants";
function Tesselation({ state, handleLines }) {
  return (
    <>
      <defs>
        <pattern
          id="pattern"
          viewBox={`${-2 / s} ${-2 / s} ${s * 2} ${s * 2}`}
          height={`30%`}
          width={`30%`}
        >
          <Tile state={state} handleLines={handleLines}/>
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
