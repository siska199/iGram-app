import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../hook/themeContext";
import ProgressBar from "../ProgressBar/ProgressBar";
import { UploadContainer, ButtonUploadContainer, ButtonUpload } from "./style";

const UploadFoto = () => {
  const buttRef = useRef(null);
  const [file, setFile] = useState(false);

  const { theme } = useContext(ThemeContext);

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
        <ButtonUpload bg={theme.text} onClick={() => buttRef.current.click()}>
          +
        </ButtonUpload>

        {file && (
          <>
            <ProgressBar file={file} setFile={setFile} />
            <label>{file?.name}</label>
          </>
        )}
      </ButtonUploadContainer>
    </UploadContainer>
  );
};

export default UploadFoto;
