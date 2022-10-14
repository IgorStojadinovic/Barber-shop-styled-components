import styled from "styled-components";

export const Container = styled.div`  
display: flex;
width: 65%;
justify-content: space-between;
align-items: flex-start;
padding-top:200px;
z-index: 2;



`

export const PictureContainer = styled.picture`
height: 100%;
width: 40%;
`

export const HeroImage = styled.img`
height: 100%;
width: 100%;
`

export const TextContainer = styled.article`
height: 100%;
width:50%;
display: flex;
flex-direction: column;

margin-left: 100px;
`

export const Subheading = styled.p`
font-size: 16px;
line-height: 26px;
color: ${props=>props.theme.colors.subheading};
font-weight: 600;
text-transform: uppercase;
margin-bottom: 40px;
`

export const Heading = styled.h1`
font-size: 65px;
line-height: 100px;
font-weight: 700;
margin-bottom: 30px;

`
export const Paragprah = styled.p`
font-size: 18px;
line-height: 30px;
color:${props=>props.theme.colors.baseText};
padding-right: 120px;
margin-bottom: 60px;
`
export const Button = styled.button`
width: 40%;
margin-left:0px;
margin-top: 0px;
color:${props=>props.theme.colors.btnTextDark};
font-size: 14px;
font-weight: 700;
padding: 18px 43px;
text-decoration: none;
text-transform: uppercase;
background-color: ${props=>props.theme.colors.btnbgLight}
transition: margin-left 0.5s;
transition-delay: 0.3s;
transition: box-shadow, 0.3s ease-in-out;
border: 2px solid ${props=>props.theme.colors.borderColorDark};
box-shadow: 7px 7px  ${props=>props.theme.colors.borderColorDark};
&:hover{
  color: ${props=>props.theme.colors.btnTextWhite};
  background-color:${props=>props.theme.colors.btnBgHover};
  box-shadow: 0px 0px  ${props=>props.theme.colors.borderColorDark};
  margin-left: 7px;
 

}
`


// Service Container

export const ServicesContainer = styled.section`
background-color: #1a1e21;
z-index: 1;

width: 100%;
height: 800px;
margin-top: -80px;
padding: 180px 300px 0px 300px;
`

export const ServicesTextContainer = styled.div`
`

export const HeaderAndBtnContainer = styled.div`


`
export const ButtonDark = styled.button`

width: 35%;
width: 200px
margin-left:0px;
margin-top: 0px;
color:${props=>props.theme.colors.btnTextWhite};
font-size: 14px;
padding: 18px 43px;
text-decoration: none;
text-transform: uppercase;
background-color: #1a1e21;
font-weight: 700;
transition: margin-left 0.5s;
transition-delay: 0.3s;
transition: box-shadow, 0.3s ease-in-out;
border: 2px solid ${props=>props.theme.colors.borderColorDark};
box-shadow: 7px 7px  ${props=>props.theme.colors.borderColorDark};
&:hover{
  color: ${props=>props.theme.colors.btnTextWhite};
  background-color:${props=>props.theme.colors.btnBgHover};
  box-shadow: 0px 0px  ${props=>props.theme.colors.borderColorDark};
  margin-left: 7px;
 

}
`


export const ServicesSubheading = styled.p`
font-size: 16px;
line-height: 26px;
color: ${props=>props.theme.colors.subheadingWhite};
font-weight: 600;
text-transform: uppercase;

`

export const ServicseHeading = styled.h2`
font-size: 35px
font-weight: 700;
color: ${props=>props.theme.colors.subheadingWhite};
letter-spacing: 1.5px;
`