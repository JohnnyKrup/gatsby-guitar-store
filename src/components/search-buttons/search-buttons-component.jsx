import React from "react"
import styled from "styled-components"

const SearchButtons = ({ products, setProducts, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)

  const tempTags = []
  products.forEach(product => {
    product.tags.forEach(tag => tempTags.push(tag))
  })

  const tags = ["alle", ...new Set(tempTags.map(tag => tag.tag))]

  console.log({ products, setProducts, setBackToAll })
  console.log({ tags })

  const showProducts = (tag, tagIndex) => {
    setIndex(tagIndex)
    if (tag === "alle") {
      setBackToAll()
    } else {
      const tempProducts = products.filter(product => {
        return product.tags.map(tag => tag.tag).includes(tag) ? product : null
        // ^ short version of the code below
        // const tempTags = product.tags.map(tag => tag.tag)
        // return tempTags.includes(tag) ? product : null
      })
      console.log({ tag })
      console.log({ tempProducts })
      setProducts(tempProducts)
    }
  }

  return (
    <SerchButtonContainerStyle>
      {tags.map((tag, tagIndex) => {
        return (
          <button
            key={tagIndex}
            className={index === tagIndex ? "active" : undefined}
            onClick={() => showProducts(tag, tagIndex)}
          >
            {tag}
          </button>
        )
      })}
    </SerchButtonContainerStyle>
  )
}

const SerchButtonContainerStyle = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 90px;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: #999999;
    /* letter-spacing: var(--mainSpacing); */
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--mainTransition);
  }
  button:hover,
  button.active {
    color: #000;
    box-shadow: 0px 1.4px 0 #aaa;
  }

  @media screen and (max-width: 600px) {
    margin-top: 140px;
  }
`

export default SearchButtons
