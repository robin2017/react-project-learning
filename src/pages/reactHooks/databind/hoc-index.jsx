import React from "react";
import HocBind from "./hoc";
export default () => {
  const Input = (props) => (
    <>
      <p>HocBind实现 value:{props.value}</p>
      <input {...props} />
    </>
  )
  const HocInput = HocBind(Input);
  return (
    <HocInput
      initialValue="init"
      onChange={(val) => {
        console.log("HocInput", val)
      }}
    />
  )
}
