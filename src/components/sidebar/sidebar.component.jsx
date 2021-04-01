import React, { useContext } from "react"
import { Link } from "gatsby"

import { SidebarContext } from "../../context/Sidebar.Context"
import { UserContext } from "../../context/User.Context"
import { CartContext } from "../../context/Cart.Context"

import { MdClose } from "react-icons/md"
import styled from "styled-components"

const Sidebar = () => {
  const { hideSidebar } = useContext(SidebarContext)
  const { user, userLogout } = useContext(UserContext)
  const { clearCart } = useContext(CartContext)

  return (
    <SidebarStyle>
      <SidebarContainerStyle>
        <CloseButtonStyle>
          <MdClose onClick={hideSidebar} />
        </CloseButtonStyle>
        <LinksContainerStyle>
          <LinksStyle>
            <MainLinkStyle to="/" onClick={hideSidebar}>
              home
            </MainLinkStyle>
            <MainLinkStyle to="/about" onClick={hideSidebar}>
              über uns
            </MainLinkStyle>

            {user.token ? (
              <MainLinkStyle
                as="div"
                onClick={() => {
                  userLogout()
                  clearCart()
                }}
              >
                abmelden
              </MainLinkStyle>
            ) : (
              <MainLinkStyle to="/app/login" onClick={hideSidebar}>
                anmelden
              </MainLinkStyle>
            )}

            <MainLinkStyle to="/shop" onClick={hideSidebar}>
              shop
            </MainLinkStyle>
          </LinksStyle>
        </LinksContainerStyle>
      </SidebarContainerStyle>
    </SidebarStyle>
  )
}

const SidebarStyle = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    display: none;
  }
`

const SidebarContainerStyle = styled.div`
  background: var(--mainWhite);
  width: 80vw;
  height: 80vh;
  border-radius: 2px;
  position: relative;
  padding: 3rem 0;
`

const CloseButtonStyle = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  color: var(--darkGray);
`

const LinksContainerStyle = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

const LinksStyle = styled.div`
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`

const MainLinkStyle = styled(Link)`
  text-align: center;
  color: #0a2540;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

// const LinkStyle = styled(Link)`
//   text-align: center;
//   color: #0a2540;
//   text-transform: capitalize;
//   font-weight: 500;
//   font-size: 1.2rem;
//   margin-bottom: 0.5rem;
// `

// const SubLinkListStyle = styled.div`
//   width: 80vw;
//   margin-bottom: 1rem;
// `

// const SubLinkStyle = styled(Link)`
//   display: grid;
//   grid-template-columns: 1fr;
//   text-align: center;
//   color: #0a5560;
//   text-transform: capitalize;
//   font-weight: 500;
//   font-size: 1.2rem;
// `

export default Sidebar
