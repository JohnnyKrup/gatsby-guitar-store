import styled from "styled-components"

export const ItemsStyle = styled.div`
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
  padding: 0 2%;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
