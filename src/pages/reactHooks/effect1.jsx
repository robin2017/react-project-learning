import React, { useState, useEffect } from "react";
export default () => {
  const [count, setCount] = useState(0);
  //1、挂载和更新的时候都会执行，统一称为：渲染之后，并且更新了DOM
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    setCount(count + 1);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
