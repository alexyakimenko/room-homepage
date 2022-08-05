import styled from "styled-components"

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: ${({isOpen}) => (isOpen ? 0 : 100)}%;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    transition: bottom 300ms ease-in-out;
`

export const Container = styled.div`
    padding: 48px 23px;
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const Burger = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 1.25rem;
    height: 0.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transform: rotate(${({isOpen}) => (isOpen ? 180 : 0)}deg);
    transition: transform 300ms cubic-bezier(.94,-0.73,.05,1.65);
    z-index: 2;

    span {
        &:nth-child(1) {
            transform: ${({isOpen}) => (isOpen ? "translateY(300%) rotate(45deg)" : "translateY(0) rotate(0)")};
        }
        &:nth-child(2) {
            transform: scale(${({isOpen}) => (isOpen ? 0 : 100)}%);
        }
        &:nth-child(3) {
            transform: ${({isOpen}) => (isOpen ? "translateY(-300%) rotate(-45deg)" : "translateY(0) rotate(0)")};
        }
        transition: all 300ms ease-in-out;
        background-color: ${({isOpen}) => (isOpen ? "var(--darkGray)" : "var(--white)")};
    }
`

export const Line = styled.span`
    width: 100%;
    height: 2px;
`

export const Logo = styled.img`
    width: 3.875rem;
    height: 0.9375rem;
`

export const Nav = styled.nav`
    padding: 48px 23px;
    position: absolute;
    top: ${({isOpen}) => (isOpen ? 0 : -100)}%;
    opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
    background-color: var(--white);
    transition: top 500ms ease-in-out, opacity 400ms ease-in-out;
    transition-delay: 100ms;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0;
    padding: 0;
`

export const Item = styled.li`
    position: relative;
    list-style-type: none;
    margin-left: 30px;
    transform: translateY(${({isOpen}) => (isOpen ? 0 : -100)}%);
    opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
    transition: all 1000ms ease-in-out;
    transition-delay: ${({delay}) => delay}ms;

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        background: var(--darkGray);
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%) scaleX(0);
        width: 1rem;
        height: 0.125rem;

        transition: transform 500ms cubic-bezier(1,-1,0,0)
    }
    
    &:hover::after {
        transform: translateX(-50%) scaleX(1);
    }
`

export const Link = styled.a`
    color: var(--black);
    text-decoration: none;
    font-size: 1rem;
`