import { useRef, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { UploadContainer, ButtonUploadContainer, ButtonUpload } from "./style";

export const UploadFoto = ({ light }) => {
  const buttRef = useRef(null);
  const [file, setFile] = useState(false);

  const handleUploadImage = (e) => {
    console.log("hey", e.target.files[0]);
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
        <ButtonUpload light={light} onClick={() => buttRef.current.click()}>
          +
        </ButtonUpload>

        {file && (
          <>
            <ProgressBar light={light} file={file} setFile={setFile} />
            <label>{file?.name}</label>
          </>
        )}
      </ButtonUploadContainer>
    </UploadContainer>
  );
};

export default UploadFoto;
