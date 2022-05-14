import { useState, useEffect, useRef } from "react";
import { UploadContainer, ButtonUploadContainer, ButtonUpload } from "./style";

export const UploadFoto = () => {
  const buttRef = useRef(null);
  const [file, setFile] =useState("")
  const handleUploadImage = async (e) => {
    console.log("file: ", e.target.files[0]);
    setFile(e.target.files[0])
  };

  return (
    <UploadContainer>
      <h1>Your Pictures</h1>
      <p>Upload your picture, press + button below !</p>
      <ButtonUploadContainer>
        <input
          onChange={(e) => handleUploadImage(e)}
          ref={buttRef}
          type="file"
          accept="image/*"
          hidden
        />
        <ButtonUpload onClick={() => buttRef.current.click()}>+</ButtonUpload>
        <p>{file.name}</p>
        <progress id="file" value="32" max="100"> 32% </progress>
      </ButtonUploadContainer>
    </UploadContainer>
  );
};

export default UploadFoto;
