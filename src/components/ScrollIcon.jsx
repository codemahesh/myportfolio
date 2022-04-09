import React from 'react'
import { StyledScroll } from './ScrollIcon.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
function ScrollIcon() {
  return (
    <StyledScroll>
        <FontAwesomeIcon icon={faAngleDoubleDown} size="5x" bounce className='fa-bounce'/>
    </StyledScroll>
  )
}

export default ScrollIcon