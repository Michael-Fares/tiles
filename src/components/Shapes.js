import {
  petalPath,
  dartPath,
  sunPath,
  starPath,
  octagonPath,
} from "../patterns/pattern1/paths";
import { s } from "../patterns/pattern1/constants";

function Shapes({state, handleColor}) {

  return (
    <>
      <path
        d={sunPath}
        fill={state.sunColor[0]}
        onClick={(e) => handleColor(e, "sunColor")}
        key={`sun`}
        className={"sun"}
        name={"sun"}
      ></path>

      {[...Array(8)].map((_, i) => {
        const rotate8 = 45 * i;

        return (
          <>
            <path
              d={petalPath}
              fill={state.petalColors[i]}
              onClick={(e) => handleColor(e, "petalColors", i)}
              transform={`rotate(${rotate8})`}
              transform-origin={`${s} ${s}`}
              key={`petal-${i}`}
              className={`petal-${i}`}
              name={`petal-${i}`}
            ></path>
            <path
              d={dartPath}
              fill={state.dartColors[i]}
              onClick={(e) => handleColor(e, "dartColors", i)}
              transform={`rotate(${rotate8})`}
              transform-origin={`${s} ${s}`}
              key={`dart-${i}`}
              className={`dart-${i}`}
              name={`dart-${i}`}
            ></path>
          </>
        );
      })}

      {[...Array(4)].map((_, i) => {
        const rotate4 = 90 * i;
        const even = i % 2 === 0;
        return (
          <>
            <path
              d={octagonPath}
              fill={state.octagonColor[0]}
              onClick={(e) => handleColor(e, "octagonColor")}
              transform={`rotate(${rotate4})`}
              transform-origin={`${s} ${s}`}
              key={`octagon-${i}`}
              className={`octagon-${i}`}
              name={`octagon-${i}`}
            ></path>

            <path
              d={starPath}
               fill={state.starColor[0]}
              onClick={(e) => handleColor(e, "starColor")}
              transform={
                even ? `rotate(${rotate4}) scale(-1,1)` : `rotate(${rotate4})`
              }
              transform-origin={`${s} ${s}`}
              key={`star-${i}`}
              className={`star-${i}`}
              name={`star-${i}`}
            ></path>
            <path
              d={starPath}
              fill={state.starColor[0]}
              onClick={(e) => handleColor(e, "starColor")}
              transform={
                even ? `rotate(${rotate4})` : `rotate(${rotate4}) scale(-1, 1)`
              }
              transform-origin={`${s} ${s}`}
              key={`star-${i}-flipped`}
              className={`star-${i}-flipped`}
              name={`star-${i}-flipped`}
            ></path>
          </>
        );
      })}
    </>
  );
}
export default Shapes;
