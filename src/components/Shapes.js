import {
    petalPath,
    dartPath,
    sunPath,
    starPath,
    octagonPath,
  } from "../patterns/pattern1/paths";
import { s } from "../patterns/pattern1/constants";
  
function Shapes() {
  return (
    <>
      <path d={sunPath} fill="green" key={`sun`} className={"sun"}></path>
      {[...Array(8)].map((_, i) => {
        const rotate8 = 45 * i;
        const rotate4 = 90 * i;

        return i === 0 ? (
          <>
            <path
              d={petalPath}
              fill={"royalblue"}
              key={`petal-${i}`}
              className={`petal-${i}`}
            ></path>
            <path
              d={dartPath}
              fill={"lightgreen"}
              key={`dart-${i}`}
              className={`dart-${i}`}
            ></path>
            <path
              d={octagonPath}
              fill={"tomato"}
              key={`octagon-${i}`}
              className={`octagon-${i}`}
            ></path>
            <path
              d={starPath}
              fill={"orange"}
              key={`star-${i}`}
              className={`star-${i}`}
            ></path>
          </>
        ) : (
          <>
            <path
              d={petalPath}
              fill={"royalblue"}
              transform={`rotate(${rotate8})`}
              transform-origin={`${s} ${s}`}
              key={`petal-${i}`}
              className={`petal-${i}`}
            ></path>
            <path
              d={dartPath}
              fill={"lightgreen"}
              transform={`rotate(${rotate8})`}
              transform-origin={`${s} ${s}`}
              key={`dart-${i}`}
              className={`dart-${i}`}
            ></path>
            <path
              d={octagonPath}
              fill={"tomato"}
              transform={`rotate(${rotate4})`}
              transform-origin={`${s} ${s}`}
              key={`octagon-${i}`}
              className={`octagon-${i}`}
            ></path>
            <path
              d={starPath}
              fill={"orange"}
              transform={`rotate(${rotate4})`}
              transform-origin={`${s} ${s}`}
              key={`star-${i}`}
              className={`star-${i}`}
            ></path>
            <path
              d={starPath}
              fill={"orange"}
              transform={`rotate(${rotate4}) scale(-1,1)`}
              transform-origin={`${s} ${s}`}
              key={`star-${i}`}
              className={`star-${i}`}
            ></path>
          </>
        );
      })}
    </>
  );
}
export default Shapes;