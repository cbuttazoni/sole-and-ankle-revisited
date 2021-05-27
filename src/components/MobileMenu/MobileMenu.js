/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components/macro"
import { DialogOverlay, DialogContent } from "@reach/dialog"

import UnstyledButton from "../UnstyledButton"
import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile menu">
        <Filler />
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2}></Icon>
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-backdrop);hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: var(--font-weight-600);
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  display: flex;
  flex: 1;
  gap: 12px;
  flex-direction: column;
  justify-content: flex-end;
`

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-weight: var(--font-weight-500);
  text-decoration: none;
  font-size: 0.875rem;
`

const Filler = styled.div`
  flex: 1;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

export default MobileMenu
