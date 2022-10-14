import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
z-index: 10;
height: 100px;
width: 65%;
display: flex;
justify-content: center;
background-color: transparent;
position: fixed;
`

export const Container = styled.div`
display: flex;
justify-content:space-between; 
height:100px;
width: 100%;

`;

export const LogoContainer = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 25%;
`

export const Logo = styled.img`
width: 50%;
`

export const LinksContainer = styled.ul`
display: flex;
justify-content:space-between;
align-items: center;
width: 50%;
`
export const ContainerItem = styled.li`

list-style: none;
height: 100%;
`
export const LinkHoverBar = styled.div`
width:5%;
height: 2px;
background-color:transparent;
transition: width 0.2s;

`
export const StyledLink = styled(Link)`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
text-decoration: none;

color:${props=>props.theme.colors.baseText};
&:hover{
  color:${props=>props.theme.colors.linkHover};
}
&:hover + ${LinkHoverBar} {
  width: 100%;
  background-color:${props=>props.theme.colors.linkHover};
}

&:focus {
    color: ${props=>props.theme.colors.linkHover}
}
&:focus +  ${LinkHoverBar}{
  width: 100%;
  background-color:${props=>props.theme.colors.linkHover}
}
`


export const UserIcons = styled.ul`
display: flex;
justify-content: end;
align-items: center;
height: 100px;
width: 25%;
`

export const UserIcon = styled.img`
height:18px;
border-radius: 50%;
margin-right: 30px;


`
export const CartIcon = styled.img`
height: 18px;
`