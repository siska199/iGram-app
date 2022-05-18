import styled from "styled-components";

export const Progress = styled.progress`
  border-radius: 10px;
  width: 50%;
  color: white;
  &::-moz-progress-bar {
    border-radius: 10px;
    height: 5px;
  }

  &::-webkit-progress-value {
    background: ${(props)=>props.light?"#272343":"#ffd803"};
    border-radius: 5px;
  }

  &::-webkit-progress-bar {
    border-radius: 10px;
    height: 5px;
  }
`;
