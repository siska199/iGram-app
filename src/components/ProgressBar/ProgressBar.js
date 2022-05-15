import React from "react";
import useStorage from "../../hook/useStorage";

const ProgressBar = ({file}) => {
  const {url,progress,error} = useStorage(file)
  
    console.log("url: ", url)
    console.log("progress", progress)
    console.log("err: ", error)
  return (
    <>
      <progress id="file" value="32" max="100">  
      </progress>
    </>
  );
};

export default ProgressBar