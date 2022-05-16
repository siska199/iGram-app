import React from "react";
import UploadFoto from "../../components/UploadFoto/UploadFoto";
import DisplayPhotos from "../../components/DisplayPhotos/DisplayPhotos";

const Home = () => {
  return (
    <div>
      <UploadFoto />
      <DisplayPhotos />
    </div>
  );
};

export default Home;
