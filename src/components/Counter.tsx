import { useState } from "react";

import * as classes from "./Counter.module.scss";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        className={classes.btn}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      {counter}
    </div>
  );
};
