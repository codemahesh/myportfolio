import React from 'react'
import MainComponent from 'components/common/MainComponent';
import SocialMediaIcons from 'components/common/SocialMediaIcons';
import { StyledFooterSection, FooterFlexContainer } from 'components/FooterSection.styled';
import { StyledSocialFooter } from "components/common/SocialMedia.styled";
function FooterSection() {
    return (
        <StyledFooterSection>
            <MainComponent>
                <div className='footer__Flex-Container'>
                <div className="socialIcon">
                        <h3>
                            SOCIAL
                        </h3>
                        <StyledSocialFooter>
                            <SocialMediaIcons color="#fff" />
                        </StyledSocialFooter>
                    </div>
                    <div className='footerIntro'>
                        <h3>
                            MAHESH CH. JOSHI
                        </h3>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    
                </div>
                <div className='copyright'>
                  © Copyright 2022. Made by
                    <a className='copyrighttext' rel="noreferrer" target="_blank" href="https://joshimahesh.com"> Mahesh Chandra Joshi</a>
                </div>
            </MainComponent>
        </StyledFooterSection>
    )
}

export default FooterSection