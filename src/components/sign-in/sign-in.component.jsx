import React, { useContext, useState } from "react"

import { UserContext } from "../../context/User.Context"

import styled from "styled-components"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

// strapi function
import loginUser from "../../strapi/loginUser"
import { navigate } from "gatsby"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { userLogin } = useContext(UserContext)

  let isEmpty = !email || !password

  const handleSubmit = async e => {
    e.preventDefault()

    let response = await loginUser({
      email,
      password,
    })

    if (response) {
      // success
      const {
        jwt: token,
        user: { username },
      } = response.data
      const newUser = { token, username }
      userLogin(newUser)

      // clear the form
      setEmail("")
      setPassword("")

      // navigate to the shop page
      navigate("/shop")
    } else {
      // show alert
    }
  }

  return (
    <SignInStyle>
      <h2 className="title">Ich habe bereits ein Konto</h2>
      <span>Mit Email und Passwort anmelden</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          label="Passwort"
          required
        />

        {isEmpty ? null : (
          <div className="buttons">
            <CustomButton type="submit">Anmelden</CustomButton>
            {/* <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Mit Google anmelden
          </CustomButton> */}
          </div>
        )}
      </form>
    </SignInStyle>
  )
}

export const SignInStyle = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 80vw;
    margin-bottom: 50px;
  }

  & .title {
    margin: 10px 0;
  }

  & .buttons {
    display: flex;
    justify-content: space-between;
  }
`

export default SignIn
