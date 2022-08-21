import styled from "styled-components"

export const AboutWrapper = styled.div`
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: 2fr 3fr 2fr;
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

export const Image = styled.div`
    height: 266px;
    width: 100%;
    background-image: url(${props => props.srcImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media (min-height: 806px) and (min-width: 768px) {
        height: calc(100vh - var(--imageSize));
    }
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 30px;

    @media (min-width: 768px) {
        padding: 50px 10%;
    }

    * {
        margin: 0;
    }
`

export const Title = styled.h2`
    text-transform: uppercase;
    color: var(--black);
    font-size: 1rem;
`

export const Text = styled.p`
    color: var(--darkGray);
    margin-top: 24px;
    font-size: 0.875rem;
`
