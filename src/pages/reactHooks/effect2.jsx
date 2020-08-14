import React, { useState, useEffect } from "react";
export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    //2、不能调用触发重新渲染的方法，比如setXXX
    setCount(count + 1);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
