import { s } from "../constants";

function Lines({ pattern, state }) {
  const { line_paths } = pattern
  const { lines } = state;
  return (
    <>
      <g id="quarter">
        {line_paths.map((path) => {
          return (
            <path
              key={path}
              d={path}
              stroke={lines.color}
              strokeWidth={lines.thickness}
              strokeLinecap="square"
              fill="none"
            ></path>
          );
        })}
      </g>

      {[...Array(4)].map((_, i) => {
        const rotate4 = i * 90;
        return (
          <use
            key={`${i}`}
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
