import React, { useEffect } from "react";
import useStorage from "../../hook/useStorage";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress, error } = useStorage(file);
  const imageCollRef = doc(collection(db, "images"));

  useEffect(() => {
    console.log("ooo");
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
      console.log("ress addDoc:", res);
    });
  };

  return (
    <>
      <progress id="file" value={progress} max="100">
        {progress}%
      </progress>
    </>
  );
};

export default ProgressBar;
