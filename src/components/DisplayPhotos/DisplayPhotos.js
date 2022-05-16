import { useState, useEffect } from "react";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import { ContainerPhotos } from "./style";

const DisplayPhotos = () => {
  const [files, setFiles] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "images"), (snapshots) => {
      let images = [];
      snapshots.forEach((snapshoot) => {
        images.unshift({ ...snapshoot.data(), id: snapshoot.id });
      });
      images.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });

      setFiles(images);
    });

    return () => unsub;
  }, []);

  return (
    <ContainerPhotos>
      {files &&
        files?.map((file) => (
          <div key={file.id}>
            <img width={300} height={200} src={file.url} />
          </div>
        ))}
    </ContainerPhotos>
  );
};

export default DisplayPhotos;
