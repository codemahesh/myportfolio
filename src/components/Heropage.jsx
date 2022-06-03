import React from 'react';
import SocialMedia from './common/SocialMedia';
import { StyledHeroPage} from './Heropage.styled';
import ScrollIcon from './ScrollIcon';
import MainComponent from './common/MainComponent';
import {Link} from 'react-scroll';
import { HeroButton } from './common/Button';
function HeroPage() {
  return (
    <StyledHeroPage id="heropage">
      <SocialMedia />
    <MainComponent>
      <div className='hero__content'>
        <h1 className='hero__title'>HEY, I'M MAHESH JOSHI</h1>
        <p className='hero__description'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <Link to={"project"} smooth={true} duration={100}><HeroButton className="btn btn-lg">Projects</HeroButton></Link>
      </div>
      <Link to="aboutme" smooth={true} duration={10}><ScrollIcon/></Link>
      </MainComponent>
    </StyledHeroPage>
  )
}

export default HeroPage