import { navigate } from "gatsby"
import React from "react"

import Layout from "../components/layout.component"
import CustomButton from "../components/custom-button/custom-button.component"

import { ErrorContainerStyle, ErrorSectionStyle } from "../styles/404.styles"

const ErrorPage = () => {
  return (
    <Layout>
      <ErrorSectionStyle>
        <ErrorContainerStyle>
          <h1>ooops! wir konnten nichts finden hier</h1>
          <CustomButton onClick={() => navigate("/")} isCentered>
            Zurück zur Startseite
          </CustomButton>
        </ErrorContainerStyle>
      </ErrorSectionStyle>
    </Layout>
  )
}

export default ErrorPage
