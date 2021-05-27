import React from "react"
import styled from "styled-components/macro"

import { QUERIES } from "../../constants"
import Logo from "../Logo"
import SuperHeader from "../SuperHeader"
import MobileMenu from "../MobileMenu"
import Icon from "../Icon"
import UnstyledButton from "../UnstyledButton"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2}></Icon>
          </UnstyledButton>
        </MobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  border-top: 4px solid var(--color-gray-900);
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`

const MobileNav = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-600);

  &:first-of-type {
    color: var(--color-secondary);
  }

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`
const Filler = styled.div`
flex: 1;

@media ${QUERIES.tabletAndDown} {
  display: none;
}
`

export default Header
