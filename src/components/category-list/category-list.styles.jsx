import styled from "styled-components"

// export const ItemsStyle = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 30px 0;
//   padding: 0 2%;
//   cursor: pointer;

//   @media screen and (max-width: 800px) {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 15px;
//   }
// `

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

  @media (min-width: 1200px) {
    display: grid;
    grid-template-areas:
      "a b c"
      "d d d"
      "e e e"
      "f g h";

    .item-1 {
      grid-area: a;
    }
    .item-2 {
      grid-area: b;
    }
    .item-3 {
      grid-area: c;
    }
    .item-4 {
      grid-area: d;
    }
    .item-5 {
      grid-area: e;
    }
    .item-6 {
      grid-area: f;
    }
    .item-7 {
      grid-area: g;
    }
    .item-8 {
      grid-area: h;
    }
  }
`
