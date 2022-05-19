import styled from "styled-components";

export const ToggleButton = styled.div`
  width: 4.5rem;
  height: 2rem;
  position: relative;
  border-radius: 20px;

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer !important;
    opacity: 0;
    z-index: 9999;
  }

  input:checked + label .ball {
    transform: translateX(35px);
  }
`;

export const ContainerIcon = styled.label`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bg};
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
  border-radius: 20px;
  align-items: center;
  position: relative;

  .ball {
    position: absolute;
    width: 40%;
    height: 80%;
    z-index: 999;
    left: 3px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    background-color: ${(props) => props.ballbg};
  }
`;
