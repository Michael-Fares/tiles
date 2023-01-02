import { linePath1, linePath2 } from "../patterns/pattern1/paths";
import { s } from "../patterns/pattern1/constants";

function Lines({ state }) {
  const { lines } = state;
  return (
    <>
      <g id="quarter">
        <path
          d={linePath1}
          stroke={lines.color}
          stroke-width={lines.thickness}
          stroke-linecap="square"
          className="line line-1"
          fill="none"
        ></path>
        <path
          d={linePath2}
          stroke={lines.color}
          stroke-width={lines.thickness}
          stroke-linecap="square"
          className="line line-2"
          fill="none"
        ></path>
      </g>

      {[...Array(4)].map((_, i) => {
        const rotate4 = i * 90;
        return (
          <use
            href="#quarter"
            transform={`rotate(${rotate4})`}
            transform-origin={`${s} ${s}`}
          ></use>
        );
      })}
    </>
  );
}
export default Lines;
