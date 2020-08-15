import React from "react";
import { useBind } from "./hook";
export default () => {
  const inputProps = useBind("init", (val) => {
    console.log("HookBind", val)
  })
  return (
    <>
      <p>hookBind实现 value:{inputProps.value}</p>
      <input {...inputProps} />
    </>
  )
}
