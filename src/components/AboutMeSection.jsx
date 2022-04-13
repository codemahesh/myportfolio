import React from 'react'
import SubHeading from './common/SubHeading';
import { AboutSectionContainer } from './AboutMeSection.styled';
import { SmallButton } from './common/Button';
import { Skills } from './common/Skill.styled';
import MainComponent from './common/MainComponent';
import {Link} from 'react-scroll';
function AboutmeSection() {
    return (
        <AboutSectionContainer id="aboutme">
        <MainComponent>
                    <SubHeading heading={"ABOUT ME"} description={"Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"}>
                    </SubHeading>
                    <div className="about__container">
                        <div className='about__content'>
                            <h3 className='about__subheading'>
                                Get to know me!
                            </h3>
                            <p className='about__description'>
                                I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                                <br></br>
                                <br></br>
                                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                            </p>
                            <Link to={"contact"} smooth={true} duration={200}><SmallButton>Contact</SmallButton></Link>
                        </div>
                        <div className='about__skill'>
                            <h3 className='about__subheading'>
                                My Skills
                            </h3>
                        <div className='about__skillcontainer'>
                            <Skills>HTML</Skills>
                            <Skills>CSS</Skills>
                            <Skills>JavaScript</Skills>
                            <Skills>React</Skills>
                            <Skills>GIT</Skills>
                            <Skills>Responsive Design</Skills>
                        </div>
                        </div>
                    </div>       
        </MainComponent>
        </AboutSectionContainer>

    )
}

export default AboutmeSection