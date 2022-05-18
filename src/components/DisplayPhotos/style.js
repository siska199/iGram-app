import styled from "styled-components";

export const ContainerPhotos = styled.div`
  display: flex;
  gap: 4rem;
  padding: 4rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    box-shadow: -10px -10px 0 -5px
        ${(props) => (props.light ? "#272343" : "#ffd803")},
      10px 10px 0 -5px ${(props) => (props.light ? "#272343" : "#ffd803")};
  }
`;
