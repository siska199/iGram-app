import { storage, db } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, doc, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, useEffect } from "react";

const useStorage = (file) => {
  const [url, setURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("run");
    const imageCollRef = collection(db, "images");
    const imageRef = ref(storage, `images/${file.name}`); //storage + path penyimpanan file
    const uploadTask = uploadBytesResumable(imageRef, file); //imageRef and file

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        console.log("progress: ", progress);
      },
      (err) => {
        setError(err);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addDoc(imageCollRef, { url, timestamp: serverTimestamp() }).then(
            (res) => {
              console.log("ress addDoc:", res);
            }
          );
          setURL(url);
        });
      }
    );
  }, [file]);

  return { url, progress, error };
};

export default useStorage;
