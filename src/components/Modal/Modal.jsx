import React from "react";
import { ContainerModal } from "./styled";

const Modal = ({ url, setModal }) => {
  const handleCloseModal = (e) => {
    setModal(false);
  };
  return (
    <ContainerModal onClick={(e) => handleCloseModal(e)}>
      <img src={url} alt="" onClick={(e) => e.stopPropagation()} />
    </ContainerModal>
  );
};

export default Modal;
