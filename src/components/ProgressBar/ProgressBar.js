import React, { useEffect } from "react";
import useStorage from "../../hook/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress, error } = useStorage(file);

  useEffect(() => {
    console.log("ooo");
    if (progress == 100) {
      console.log("res: ");
      setTimeout(() => {
        setFile(false);
      }, 1500);
    }
  }, [url]);

  return (
    <>
      <progress id="file" value={progress} max="100">
        {progress}%
      </progress>
    </>
  );
};

export default ProgressBar;
