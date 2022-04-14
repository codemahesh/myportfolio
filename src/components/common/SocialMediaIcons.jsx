import React from 'react'
import { faFacebookSquare, faLinkedinIn, faGithub, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SocialMediaIcons({color}) {
  return (
    <>
 <a
    href='https://linkedin.com/in/mahesh-chandra-joshi-523474237' target='_blank'>
    <FontAwesomeIcon icon={faLinkedinIn} size="3x" color={color} />
 </a>

 <a
    href='https://twitter.com/maheshjo121' target='_blank'>
    <FontAwesomeIcon icon={faTwitterSquare} size="3x" color={color} />
 </a>

 <a
    href="https://github.com/codemahesh" target='_blank'>
     <FontAwesomeIcon icon={faGithub} size="3x" color={color}/>
 </a>

    </>
  )
}

export default SocialMediaIcons