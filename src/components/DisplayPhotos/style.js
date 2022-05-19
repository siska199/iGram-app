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
    width: 300px;
    height: 200px;
    cursor: pointer !important;
    box-shadow: -10px -10px 0 -5px
        ${(props) => (props.light ? "#272343" : "#ffd803")},
      10px 10px 0 -5px ${(props) => (props.light ? "#272343" : "#ffd803")};
  }
  @media only screen and (max-width: 425px) {
    img {
      width: 150px;
      height: 100px;
    }
    gap: 1.5rem;
    padding: 2rem;
  }
`;
