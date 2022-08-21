import React from 'react'
import Background from "../../images/desktop-image-hero-1.jpg"
import { Carousel, CarouselImg, ImagesWrapper, Images, Image, Controls, Arrow, RightArrow, LeftArrow, CarouselContent, ContentWrapper, Item, ItemWrapper, Title, Paragraph, Cta, CtaArrow } from './Hero.styled'
import data from "./data"
import ArrowImage from "../../images/icon-arrow.svg"

const Hero = () => {

    // 0 1 2
    const carouselItems = data.length-1;
    const [currentItem, setCurrentItem] = React.useState(0)

    const carouselLast = () => {
        if(currentItem <= 0) {
            setCurrentItem(carouselItems)
        } else {
            setCurrentItem(currentItem - 1)
        }
    }

    const carouselNext = () => {
        if(currentItem >= carouselItems) {
            setCurrentItem(0)
        } else {
            setCurrentItem(currentItem + 1)
        }
    }


  return (
    <>
        <Carousel>
            <CarouselImg>
                <ImagesWrapper>
                    <Images currentItem={currentItem}>
                        {
                            data.map((item, index)  => <Image key={index} srcImg={item.img} />)
                        }
                    </Images>
                </ImagesWrapper>
                <Controls>
                    <Arrow onClick={carouselLast}>
                        <LeftArrow/>
                    </Arrow>
                    <Arrow onClick={carouselNext}>
                        <RightArrow/>
                    </Arrow>
                </Controls>
            </CarouselImg>
            <CarouselContent>
                <ContentWrapper currentItem={currentItem}>
                    {
                        data.map((item, index) => {
                            return (
                                <Item key={index}>
                                    <ItemWrapper>
                                    <Title>{item.title}</Title>
                                    <Paragraph>{item.content}</Paragraph>
                                    <Cta>
                                        Shop now
                                        <CtaArrow src={ArrowImage} alt=""/>
                                    </Cta>
                                    </ItemWrapper>
                                </Item>
                            )
                        })
                    }
                </ContentWrapper>
            </CarouselContent>
        </Carousel>
    </>
  )
}

export default Hero