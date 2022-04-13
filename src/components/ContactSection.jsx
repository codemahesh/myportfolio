import React from 'react';
import MainComponent from 'components/common/MainComponent';
import {StyledContactSection } from 'components/ContactSection.styled';
import SubHeading from 'components/common/SubHeading';
import ContactForm from 'components/ContactSection';

function ContactSection() {
  return (
    <StyledContactSection id='contact'>
        <MainComponent>
        
            <SubHeading heading={"CONTACT"} description={"Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"}/>

            <ContactForm/>
        </MainComponent>
    </StyledContactSection>
  )
}

export default ContactSection