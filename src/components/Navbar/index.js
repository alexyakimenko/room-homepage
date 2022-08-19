import React from 'react'
import { NavbarWrapper, Overlay, Container, Wrapper, Burger, Line, Logo, Nav, List, Item, Link} from './Navbar.styled'
import LogoImage from "../../images/logo.svg"

const Navbar = ({isOpen, setIsOpen}) => {

  const handleClick = () => {
    setIsOpen(!isOpen)
    window.scrollTo(0,0)
  }

  let delayed = 0;

  const getDelay = () => {
    delayed++
    return delayed * 100
  }

  return (
    <NavbarWrapper isOpen={isOpen}>
      <Overlay isOpen={isOpen}>
      </Overlay>
      <Nav isOpen={isOpen}>
        <List>
          <Item isOpen={isOpen} delay={getDelay}>
            <Link href="#">home</Link>
          </Item>
          <Item isOpen={isOpen} delay={getDelay}>
            <Link href="#">shop</Link>
          </Item>
          <Item isOpen={isOpen} delay={getDelay}>
            <Link href="#">about</Link>
          </Item>
          <Item isOpen={isOpen} delay={getDelay}>
            <Link href="#">contact</Link>
          </Item>
        </List> 
      </Nav>
      <Container isOpen={isOpen}>
        <Wrapper>
          <Burger isOpen={isOpen} onClick={handleClick}>
              <Line />
              <Line />
              <Line />
          </Burger>
          <Logo src={LogoImage} alt="Room" />
        </Wrapper>
      </Container>
    </NavbarWrapper>
  )
}

export default Navbar