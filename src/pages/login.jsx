import React, { useState } from "react"

import styled from "styled-components"

import Layout from "../components/layout.component"
import SignIn from "../components/sign-in/sign-in.component"
import SignUp from "../components/sign-up/sign-up.component"
import Hero from "../components/hero/hero-alternative.component"

const LoginPage = () => {
  const [isMember, setIsMember] = useState(true)

  return (
    <Layout>
      <Hero fullscreen={true}>
        <LoginStyle>
          {isMember ? <SignIn /> : <SignUp />}
          {isMember ? (
            <ToggleFormStyle>
              <p>
                Noch nicht registriert?
                <br /> Dann registriere dich bitte{" "}
                <span onClick={() => setIsMember(!isMember)}>hier</span>
              </p>
            </ToggleFormStyle>
          ) : (
            <ToggleFormStyle>
              <p>
                Bereits Kunde? <br />
                Dann bitte{" "}
                <span onClick={() => setIsMember(!isMember)}>hier</span>{" "}
                anmelden
              </p>
            </ToggleFormStyle>
          )}
        </LoginStyle>
      </Hero>
    </Layout>
  )
}

export const LoginStyle = styled.div`
  /* width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 150px auto 20px auto; */

  width: 80vw;
  display: grid;
  grid-template: 1fr;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 80vw;
    display: grid;
    grid-template: 1fr;
    margin: 90px auto;
  }
`

export const ToggleFormStyle = styled.div`
  margin-top: 40px;

  span {
    font-weight: 700;
    cursor: pointer;
  }
`

export default LoginPage
