import React from 'react'
import { Overlay, Container, Wrapper, Burger, Line, Logo, Nav, List, Item, Link} from '../Navbar.styled'
import LogoImage from "../../images/logo.svg"

const Navbar = ({isOpen, setIsOpen}) => {

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Overlay isOpen={isOpen}>
      </Overlay>
      <Nav isOpen={isOpen}>
        <List>
          <Item isOpen={isOpen} delay="100">
            <Link href="#">home</Link>
          </Item>
          <Item isOpen={isOpen} delay="200">
            <Link href="#">shop</Link>
          </Item>
          <Item isOpen={isOpen} delay="300">
            <Link href="#">about</Link>
          </Item>
          <Item isOpen={isOpen} delay="400">
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
    </>
  )
}

export default Navbar