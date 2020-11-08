import styled from "styled-components"

export const TileLayoutStyle = styled.div`
  /* margin-top: 2rem; */
  margin: 0 auto;
  display: grid;
  width: 100%;
  max-width: var(--fullWidth);
  padding: 0 2%;
  gap: 1rem;
  /* safari workaround */
  grid-gap: 1rem;
  grid-template-rows: auto auto;
  grid-auto-rows: auto;
  justify-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;        
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 92%;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }  
`