import React from "react";
import useStorage from "../../hook/useStorage";

const ProgressBar = ({file,setFile}) => {
  const {url,progress,error} = useStorage(file)
  if(progress==100){
    setTimeout(() => {
      setFile(false)
    }, 1500);
  }

    console.log("url: ", url)
    console.log("progress", progress)
    console.log("err: ", error)
  return (
    <>
      <progress id="file" value={progress} max="100">  
        {progress}%
      </progress>
    </>
  );
};

export default ProgressBar