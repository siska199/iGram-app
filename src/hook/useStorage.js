import { storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";

const useStorage = (file) => {
  const [url, setURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {

    const imageRef = ref(storage, `images/${file.name}`); //storage + path penyimpanan file
    const uploadTask = uploadBytesResumable(imageRef, file); //imageRef and file

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapsot: ", snapshot);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        setError(err);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setURL(url);
        });
      }
    );
  }, [file]);

  return { url, progress, error };
};

export default useStorage;
