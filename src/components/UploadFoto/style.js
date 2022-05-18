import styled from "styled-components";

export const UploadContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.3rem;
  text-align: center;
  h1 {
    font-size: 3em;
    font-family: "Lobster", cursive;
  }
  p {
    font-size: 1.3em;
    font-weight: 200;
  }
`;
export const ButtonUploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  label {
    font-size: 0.9em;
    font-weight: 100;
    letter-spacing: 0.1rem;
    margin-top: -17px;
    color: grey;
  }
  input {
    cursor: pointer;
  }
`;

export const ButtonUpload = styled.button`
  font-size: 1.5em;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => (props.light ? "#272343" : "")};
  color: ${(props) => (props.light ? "white" : "black")};
  border: 2px solid white;
  transition: 0.2s all ease-out;
  &:hover{
    transform: scale(1.1);
  }
`;
