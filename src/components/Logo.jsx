import React from 'react';
import { StyledLogo,LogoIcon,LogoName } from './Navbar.styled';
import {animateScroll as scroll} from 'react-scroll'
import logoIcon from '../assets/images/site_logo.webp'

function Logo() {
  return (
    <StyledLogo>
    <LogoIcon alt="site logo" src={logoIcon} onClick={()=>scroll.scrollToTop()}/>
    <LogoName onClick={()=>scroll.scrollToTop({
  duration: 1000,
  delay: 100,
  smooth: 'easeOutQuint'
})}>Mahesh Joshi</LogoName>
   </StyledLogo>
  )
}
export default Logo