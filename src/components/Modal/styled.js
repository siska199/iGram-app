import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10rem;
  img {
    width: 40rem;
    height: 30rem;
    object-fit: cover;
  }
  @media only screen and (max-width: 425px) {
    img {
      width: 20rem;
      height: 20rem;
    }
  }
`;
