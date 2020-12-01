import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { FormattedDate, FormattedNumber, IntlProvider } from "react-intl"

const Order = ({ order }) => {
  return (
    <OrderStyle>
      <IntlProvider locale="de-CH" defaultLocale="de">
        <h3>
          Bestellung vom{" "}
          <FormattedDate
            year="numeric"
            month="long"
            day="numeric"
            value={order.created_at}
          />
        </h3>
        <SubTitleStyle>
          Gesamtbetrag:{" "}
          <span>
            <FormattedNumber
              value={order.total}
              style="currency"
              currency="CHF"
              minimumFractionDigits="0"
              maximumFractionDigits="2"
            />
          </span>
        </SubTitleStyle>
        {order.items.map(orderItem => {
          const {
            title,
            quantity,
            price,
            strapiId,
            product_image: {
              childImageSharp: { fluid },
            },
          } = orderItem
          return (
            <OrderItemStyle key={strapiId}>
              <ImageContainerStyle>
                <ImageStyle alt={title} fluid={fluid} />
              </ImageContainerStyle>

              <ColumnStyle>{title}</ColumnStyle>
              <QuantityStyle>
                <span className="value">{quantity}x</span>
              </QuantityStyle>
              <ColumnStyle>
                <FormattedNumber
                  value={price}
                  style="currency"
                  currency="CHF"
                  minimumFractionDigits="0"
                  maximumFractionDigits="2"
                />
              </ColumnStyle>
            </OrderItemStyle>
          )
        })}
      </IntlProvider>
    </OrderStyle>
  )
}

const OrderStyle = styled.div`
  margin-bottom: 40px;
  padding: 25px 0;
  background: white;
  opacity: 1;

  :hover {
    background: #eeeeee;
    opacity: 0.99;
    cursor: pointer;
  }
`
const SubTitleStyle = styled.p`
  border-bottom: 1px solid darkgrey;
  padding-bottom: 15px;
  padding-left: 15px;
`

const OrderItemStyle = styled.div`
  width: 100%;
  min-width: 70vw;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 15px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    min-width: 80vw;
  }
`

const ColumnStyle = styled.span`
  width: 33%;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`

const QuantityStyle = styled.span`
  width: 10%;
  display: flex;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`
const ImageContainerStyle = styled.div`
  width: 10%;
  padding-right: 15px;
  padding-left: 15px;
`

const ImageStyle = styled(Img)`
  width: 100%;
`

export default Order
