import React, { useState, useContext } from "react"

import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"

import Title from "../title/title.component"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

import submitOrder from "../../strapi/submitOrder"
import styled from "styled-components"

// stripe elements

const Checkout = props => {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const { cartItems, cartTotal, clearCart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  // state values

  const stripe = useStripe()
  const elements = useElements()

  const isEmpty = !name

  const handleSubmit = async e => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    const cardElement = elements.getElement(CardElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    })

    error
      ? console.log("[error]", error)
      : console.log("[PaymentMethod]", paymentMethod)
  }

  return (
    <CheckoutSectionStyle>
      <Title title="Kasse" />
      <CheckoutFormStyle onSubmit={handleSubmit}>
        <h3>
          Gesamtbetrag : <span>CHF {cartTotal}</span>
        </h3>
        {/* Add all fields for the address, later */}
        <FormInput
          name="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          label="Name"
          required
        />

        <div className="card-element">
          <CardElement />
        </div>

        <div className="stripe-input">
          <label htmlFor="card-element">Test Kreditkarten</label>
          <p className="stripe-info">
            Für diesen Test stehen dir folgende Testkarten zur Verfügung:
          </p>
          <div className="payment">
            <span>Mastercard: </span> 5200 8282 8282 8210 / EXP: 01/25 / CVC:
            123
          </div>
          <div className="payment">
            <span>Visa: </span> 4000 0566 5566 5556 / EXP: 01/25 / CVC: 123
          </div>
        </div>

        {error && <p>{error}</p>}

        {isEmpty ? (
          <p className="field-error">Bitte alle Pflichtfelder ausfüllen!</p>
        ) : (
          <div className="buttons">
            <CustomButton type="submit" disabled={!stripe}>
              BEZAHLEN
            </CustomButton>
          </div>
        )}
      </CheckoutFormStyle>
    </CheckoutSectionStyle>
  )
}

export const CheckoutSectionStyle = styled.section`
  margin-top: 120px;
  width: 50vw;
`

export const CheckoutFormStyle = styled.form`
  width: 100%;
  /* background-color: var(--offWhite); */
  padding: 5%;

  .card-element {
    margin: 20px auto;
  }

  .stripe-input {
    font-weight: 700;

    .stripe-info {
      font-weight: 400;
      margin-top: 5px;
    }

    .payment {
      color: red;
      font-weight: 300;
      margin-top: 5px;

      span {
        font-weight: 700;
      }
    }
  }

  .buttons {
    margin-top: 20px;
    width: 100%;
  }

  .field-error {
    color: red;
    font-weight: 400;
    margin-top: 15px;
    text-align: center;
  }
`

export default Checkout
