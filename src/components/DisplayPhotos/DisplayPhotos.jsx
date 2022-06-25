import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import { ContainerPhotos } from "./style";

const DisplayPhotos = ({ setUrl, setModal }) => {
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

  const handleOpenModal = (url) => {
    setModal(true);
    setUrl(url);
  };

  return (
    <ContainerPhotos className="container">
      {files &&
        files?.map((file) => (
          <div onClick={() => handleOpenModal(file.url)} key={file.id}>
            <img  src={file.url} />
          </div>
        ))}
    </ContainerPhotos>
  );
};

export default DisplayPhotos;
