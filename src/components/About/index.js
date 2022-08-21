import React from 'react'
import { AboutWrapper, Image, TextContent, Title, Text} from './About.styled'
import imageDark from "../../images/image-about-dark.jpg"
import imageLight from "../../images/image-about-light.jpg"

const About = () => {
  return (
    <section>
        <AboutWrapper>
            <Image srcImg={imageDark}></Image>
            <TextContent>
                <Title>About our furniture</Title>
                <Text>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</Text>
            </TextContent>
            <Image srcImg={imageLight}></Image>
        </AboutWrapper>
    </section>
  )
}

export default About