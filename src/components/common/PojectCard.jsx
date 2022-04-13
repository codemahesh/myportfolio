import { StyledCards,StyledCardContainer} from './ProjectCard.styled';
import { SmallButton } from './Button';
import React from 'react';
import {Project} from '../../data/project'
import 'react-toastify/dist/ReactToastify.css';

function PojectCard() {

  return (
    <>
      { Project.map((p,x) => <StyledCardContainer key={x}>
    <StyledCards>
        <div className='card__imagecontainer'>
        <picture >
            <source srcSet={p.image} type="image/jpeg"/>
            <img className='card__image' src={p.fallbacksrc} alt='project image'/>
        </picture>
        </div>
        <div className='card__contentcontainer'>
            <h3 className="card__heading">{p.heading}</h3>
            <p className="card__description">{p.paragraph}</p>
                <SmallButton>case study</SmallButton>
        </div>
    </StyledCards>
    </StyledCardContainer>
       )}
    </>
  )
}

export default PojectCard