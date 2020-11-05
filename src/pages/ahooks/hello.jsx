import React, { useState } from "react";
export default () => {
  const [val, setVal] = useState(false);
  return (
    <div>
      <p>Current Boolean: {String(val)}</p>
      <button onClick={() => setVal(!val)}>Toggle</button>
    </div>
  );
};
