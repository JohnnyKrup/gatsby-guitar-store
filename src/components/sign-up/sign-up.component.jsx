import React, { useContext, useState } from "react"

import { UserContext } from "../../context/User.Context"

import styled from "styled-components"

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"

// strapi functionality
import registerUser from "../../strapi/registerUser"
import { navigate } from "gatsby"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")

  const { userLogin } = useContext(UserContext)

  let isEmpty = !email || !password || !username || !confirmPassword

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Die beiden Passworte sind nicht gleich!")
      return
    }

    let response = await registerUser({
      username,
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
      setConfirmPassword("")
      setUsername("")

      // navigate to the shop
      navigate("/shop")
    } else {
      // fail alert
    }
  }

  return (
    <SignUpStyle>
      <h2 className="title">Ich habe noch kein Konto</h2>
      <span>Mit Email und Passwort anmelden</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={username}
          label="Benutzername"
          onChange={event => setUsername(event.target.value)}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={event => setEmail(event.target.value)}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Passwort"
          onChange={event => setPassword(event.target.value)}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Passwort wiederholen"
          onChange={event => setConfirmPassword(event.target.value)}
          required
        />
        {isEmpty ? null : <CustomButton type="submit">ANMELDEN</CustomButton>}
      </form>
    </SignUpStyle>
  )
}

export const SignUpStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }

  .title {
    margin: 10px 0;
  }
`

export default SignUp
