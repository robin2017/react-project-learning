import React from "react";
import { useToggle } from "ahooks";
export default () => {
  const [state, { toggle }] = useToggle();
  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
};
