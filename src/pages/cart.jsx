import React from "react"

import { CartContext } from "../context/Cart.Context"

import Layout from "../components/layout.component"
import CartItem from "../components/cart-item/cart-item.component"
import styled from "styled-components"

const CartPage = () => {
  const { cartItems, cartTotal } = React.useContext(CartContext)
  // console.log({ cartItems })

  return (
    <Layout>
      <CartPageStyle>
        <CartHeaderStyle>
          <div className="header-block">
            <span>Produkt</span>
          </div>
          <div className="header-block">
            <span>Bezeichnung</span>
          </div>
          <div className="header-block">
            <span>Menge</span>
          </div>
          <div className="header-block">
            <span>Preis</span>
          </div>
          <div className="header-block">
            <span>Entfernen</span>
          </div>
        </CartHeaderStyle>
        {cartItems.map(cartItem => {
          console.log({ cartItem })
          return <CartItem key={cartItem.strapiId} cartItem={cartItem} />
        })}

        <CartTotalStyle className="total">
          <span>TOTAL: CHF {cartTotal}</span>
        </CartTotalStyle>
        <div className="test-data">
          <h4>TEST CREDIT CARD DATA:</h4>
          <div className="payment">
            <span>Mastercard: </span> 5200 8282 8282 8210 / EXP: 01/25 / CVC:
            123
          </div>
          <div className="payment">
            <span>Visa: </span> 4000 0566 5566 5556 / EXP: 01/25 / CVC: 123
          </div>
        </div>

        {/* <StripeCheckoutButton price={total} /> */}
      </CartPageStyle>
    </Layout>
  )
}

export const CartPageStyle = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px auto 0;

  @media screen and (max-width: 800px) {
    width: 85vw;
  }
`

export const CartHeaderStyle = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }

    @media screen and (max-width: 800px) {
      font-size: 12px;
      width: 20%;
      &:last-child {
        width: 10%;
      }
    }
  }
`
export const CartTotalStyle = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`
export const TestDataStyle = styled.div`
  margin: 20px 0;
  color: red;

  .payment span {
    font-weight: 700;
  }
`

export default CartPage
