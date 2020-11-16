import React, { useContext } from "react"

import { navigate } from "gatsby"

import StripeCheckout from "react-stripe-checkout"
import { CartContext } from "../../context/Cart.Context"
import { UserContext } from "../../context/User.Context"
import submitOrder from "../../strapi/submitOrder"

import Logo from "../../images/LogoClose_128.svg"

const StripeCheckoutButton = ({ price }) => {
  const { cartItems, clearCart } = useContext(CartContext)
  const { user } = useContext(UserContext)

  const priceForStripe = price * 100
  const publishableKey =
    "pk_test_51HMEUpGwZJpWDm6OoB0Y2QbMy6oaOi0eVD1po1u3jZohjdHE4etIstV1cZe99qSUHSoMXhwQq7fNP7pIETflJJVK00SblHdgzR"

  const onToken = async token => {
    console.log(token)

    if (token) {
      const {
        id,
        card: { name },
      } = token

      console.log(id, name, user.token)

      let order = await submitOrder({
        name: name,
        total: price,
        items: cartItems,
        stripeTokenId: id,
        userToken: user.token,
      })

      if (order) {
        alert("Zahlung war erfolgreich")
        clearCart()
        navigate("/")
      } else {
        alert(
          "Es ist ein Fehler bei der Bezahlung aufgetreten. Bitte versuchen Sie es nochmals."
        )
      }
    }
  }

  return (
    <StripeCheckout
      label="Jetzt Bezahlen"
      panelLabel={`Jetzt CHF ${price} bezahlen`}
      name="dieGitarre.ch"
      currency="CHF"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Der Gesamtbetrag ist CHF ${price}`}
      amount={priceForStripe}      
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
