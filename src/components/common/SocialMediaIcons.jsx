import React from 'react'
import { faFacebookSquare, faLinkedinIn, faTwitterSquare,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SocialMediaIcons() {
  return (
    <>
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
            <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
            <FontAwesomeIcon icon={faGithub} size="3x" />
    </>
  )
}

export default SocialMediaIcons