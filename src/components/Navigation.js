import React from 'react'
import { Header,Container,Logo,LinksContainer,UserIcons,StyledLink,UserIcon,CartIcon,LogoContainer,ContainerItem,LinkHoverBar } from '../styles/Navigation/NavigationStyles'
import LogoImg from "../images/Home page/Logo/logo-dark.svg";
import Account from "../images/Icons/user.png";
import ShoppingCart from "../images/Icons/shopping-cart.png";
import { useState } from 'react';

const Navigation = () => {
  const [navbar,setNavbar] = useState(false);


  const changeBackground = () =>{
    if(window.scrollY >= 100){
      setNavbar(true);
      console.log(navbar);
      console.log(window.scrollY);
    }else{
      setNavbar(false);
      console.log(navbar);
    }
  }

  window.addEventListener('scroll',changeBackground)

  
  return( 

    <Header className={navbar ? 'active' : 'transparent'}>
      <Container>
         <LogoContainer>
           <Logo src={LogoImg}/>
        </LogoContainer>
  
        <LinksContainer>
          <ContainerItem>
          <StyledLink to="/">Home</StyledLink>
          <LinkHoverBar></LinkHoverBar>
          </ContainerItem>
          <ContainerItem>
            <StyledLink to="/services">Services</StyledLink>
            <LinkHoverBar></LinkHoverBar>
          </ContainerItem>
          <ContainerItem>
          <StyledLink to="/products">Products</StyledLink>
          <LinkHoverBar></LinkHoverBar>
          </ContainerItem>
          <ContainerItem>
            <StyledLink to="/about">About</StyledLink>
            <LinkHoverBar></LinkHoverBar>
          </ContainerItem>
          <ContainerItem>
            <StyledLink to="/news">News</StyledLink>
            <LinkHoverBar></LinkHoverBar>
          </ContainerItem>
          <ContainerItem>
            <StyledLink to="/contact">Contact</StyledLink>
            <LinkHoverBar></LinkHoverBar>
          </ContainerItem>
        
        </LinksContainer>
        <UserIcons>
          <UserIcon src={Account}/>
          <CartIcon src={ShoppingCart}/>
        </UserIcons>
     </Container>
    </Header>
    
  ) 

}

export default Navigation