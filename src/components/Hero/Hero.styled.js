import styled from "styled-components"
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

export const Carousel = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 7fr 5fr;
    }
`

export const CarouselImg = styled.div`
    width: 100%;
    height: 361px;
    position: relative;

    transition: all 300ms ease-in-out;

    @media (min-width: 768px) {
        height: 540px;
    }

    @media (min-height: 806px) {
        height: var(--imageSize);
    }
`

export const ImagesWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Images = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transform: translateX(${props => props.currentItem * -100}%);
    transition: all 500ms ease-in-out;
`

export const Image = styled.div`
    min-width: 100%;
    height: 100%;
    background-image: url(${props => props.srcImg});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
`

export const Controls = styled.div`
    position: absolute; 
    width: 112px;
    height: 56px;
    right: 0;
    bottom: 0;
    background-color: var(--black);
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        right: -112px;
    }
`

export const Arrow = styled.div`
    width: 100%;
    height: 100%;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 300ms ease-in-out;


    &:hover {
        background: var(--veryDarkGray);
    }
`

export const LeftArrow = styled(BsChevronLeft)``

export const RightArrow = styled(BsChevronRight)``

export const CarouselContent = styled.div`
    padding-top: 60px;
    padding-bottom: 70px;
    overflow: hidden;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    transform: translateX(${props => props.currentItem * -100}%);
    transition: all 500ms ease-in-out;
`

export const Item = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    min-width: 100%;
`

export const ItemWrapper = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        width: calc(100vw / 3);
    }

    @media (min-width: 992px) {
        padding-left: 5%;
    }
`


export const Title = styled.h1`
    font-size: 2.25rem;
    line-height: 1;
    color: var(--black);
    margin: 0;

    @media (min-width: 768px) {
        max-width: 410px;
    }
`

export const Paragraph = styled.p`
    font-size: 1rem;
    color: var(--darkGray);
    margin-top: 20px;
    margin-bottom: 0;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 410px;
    }
`

export const Cta = styled.a`
    display: inline-flex;
    align-items: center;
    position: relative;
    margin-top: 48px;
    text-transform: uppercase;
    color: var(--black);
    font-weight: 600;
    letter-spacing: 1rem;
    cursor: pointer;
    transition: color 300ms ease-in-out;

    &:hover {
        color: var(--darkGray);

        img {
            right: -60px;
        }
    }
`

export const CtaArrow = styled.img`
    font-size: 2rem;
    position: absolute;
    right: -50px;
    transform: translateY(-2px);
    transition: right 500ms cubic-bezier(.5,-0.5,0,1);
`