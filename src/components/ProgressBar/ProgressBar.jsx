import React, { useContext, useEffect } from "react";
import useStorage from "../../hook/useStorage";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import { Progress } from "./style";
import { ThemeContext } from "../../hook/themeContext";

const ProgressBar = ({ file, setFile }) => {
  const { theme } = useContext(ThemeContext);
  const { url, progress, error } = useStorage(file);
  const imageCollRef = doc(collection(db, "images"));

  useEffect(() => {
    if (progress == 100) {
      setTimeout(() => {
        setFile(false);
        handleUploadFirestore();
      }, 1500);
    }
  }, [url]);

  const handleUploadFirestore = async () => {
    setDoc(imageCollRef, {
      filename: file.name,
      url,
      createdAt: Date.now(),
    }).then((res) => {
    });
  };

  return (
    <Progress color={theme.secondary} id="file" value={progress} max="100">
      {progress}%
    </Progress>
  );
};

export default ProgressBar;
