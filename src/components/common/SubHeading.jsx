import React from 'react';
import { StyledSubHeading,Heading,HeadingDescription} from './SubHeading.styled';


function SubHeading(props) {
  return (
    <StyledSubHeading>
    <Heading className="display-2">{props.heading}</Heading>
    <HeadingDescription>{props.description}</HeadingDescription>
    </StyledSubHeading>
  )
}

export default SubHeading;