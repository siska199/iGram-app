import { useRef, useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { UploadContainer, ButtonUploadContainer, ButtonUpload } from "./style";

export const UploadFoto = () => {
  const buttRef = useRef(null);
  const [file, setFile] = useState(false);

  const handleUploadImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
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
        {file && (
          <>
            <ProgressBar file={file} setFile={setFile} />
            <p>{file?.name}</p>
          </>
        )}
      </ButtonUploadContainer>
    </UploadContainer>
  );
};

export default UploadFoto;
