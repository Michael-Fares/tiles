import { s } from "../patterns/pattern1/constants";

function Lines({ pattern, state }) {
  const { line_paths } = pattern
  const { lines } = state;
  return (
    <>
      <g id="quarter">
        {line_paths.map((path, i) => {
          return (
            <path
              d={path}
              stroke={lines.color}
              stroke-width={lines.thickness}
              stroke-linecap="square"
              fill="none"
            ></path>
          );
        })}
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
