import React from "react";
import RenderBind from "./render";
export default () => {
  return (
    <RenderBind
      initialValue="init"
      onChange={(val) => {
        console.log("RenderBind", val);
      }}>
      {(props) => (
        <>
          <p>RenderBind实现 value:{props.value}</p>
          <input {...props} />
        </>
      )}
    </RenderBind>
  )
}
