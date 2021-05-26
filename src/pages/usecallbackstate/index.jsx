import React from 'react';
import {useEffect, useState, useRef} from "react";
// https://blog.csdn.net/qq_35233052/article/details/105634245
export default ()=> {
  const [val,setVal] = useCallbackState(0)
  useEffect(()=>{
    setVal(4,()=>{
      console.log(val)
    })
  },[])
  return (
    <div>
      Usecallbackstate
    </div>
  );
}





 
 
function useCallbackState (od) {
    const cbRef = useRef();
    const [data, setData] = useState(od);
 
    useEffect(() => {
        cbRef.current && cbRef.current(data);
    }, [data]);
 
    return [data, function (d, callback) {
        cbRef.current = callback;
        setData(d);
    }];
}
 

 
