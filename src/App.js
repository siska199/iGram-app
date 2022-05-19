import UploadFoto from "./components/UploadFoto/UploadFoto";
import Navbar from "./components/Navbar/Navbar";
import { useContext, useState } from "react";
import DisplayPhotos from "./components/DisplayPhotos/DisplayPhotos";
import Modal from "./components/Modal/Modal";
import styled from "styled-components";
import { ThemeContext } from "./hook/themeContext";

const Main = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
`;

function App() {
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{position:"relative"}}>
      <Main theme={theme}>
        <Navbar />
        <UploadFoto />
        <DisplayPhotos setUrl={setUrl} setModal={setModal} />
      </Main>
      {modal && <Modal url={url} setModal={setModal} />}
    </div>
  );
}

export default App;
