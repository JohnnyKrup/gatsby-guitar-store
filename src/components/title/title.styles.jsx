import styled from "styled-components"

export const TitleContainerStyle = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 3.5rem;
    
    span {
      font-size: 0.85em;
      color: var(--darkGray);
      margin-right: 1rem;
      font-weight: 700;
    }

    @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  }
`
