import React from 'react'
import { Container,
  PictureContainer,
  HeroImage,
  TextContainer,
  Subheading,
  Heading,
  Paragprah,
  Button,
  ServicesContainer,
  HeaderAndBtnContainer,
  ServicseHeading,
ServicesSubheading,
ServicesTextContainer,
ButtonDark } from '../styles/HomePage/HomePageStyles'
import HeadingImage  from "../images/Home page/home-hero-image-721x1024.webp"



const Home = () => {
  return (
    <>
    <Container>
      <PictureContainer>
        <HeroImage src={HeadingImage}/>
      </PictureContainer>

      <TextContainer>
        <Subheading>So fresh and so clean</Subheading>
        <Heading>Real Cuts By Real Professionals</Heading>
        <Paragprah>Sed a magna semper porta purus eu ullamcorper ligula. Nam sit amet consectetur sapien etiam dui ipsum viverra vel turpis ut dignissim. Nam sit amet consectetur sapien etiam dui ipsum viverra vel turpis ut dignissim.</Paragprah>
        <Button>Book Appointment</Button>
      </TextContainer>
  
    </Container>
    <ServicesContainer>
      <HeaderAndBtnContainer>
        <ServicesTextContainer> 
           <ServicesSubheading>Our Handling </ServicesSubheading>
           <ServicseHeading>Our Services</ServicseHeading>
        </ServicesTextContainer>
        <ButtonDark>
          Explore more
        </ButtonDark>

        
      </HeaderAndBtnContainer>
    </ServicesContainer>

    </>
  )
}

export default Home