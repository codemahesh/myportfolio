import styled from 'styled-components';

export const StyledCardContainer = styled.div`
max-width:120rem;
margin:auto;
`

export const StyledCards = styled.div`
display:flex;
margin-bottom:10rem;
flex-wrap: wrap;
justify-contenr:center;
align-items:center;
align-content:center;
gap:4rem;
flex-direction:row;
width:100%;
height:match-content;

.card__imagecontainer{
  flex:1.5;
}

.card__image{
  max-width: 100%;
  block-size: auto;
  object-fit:contain;
  aspect-ratio:8/5;
}
.card__contentcontainer{
  flex:1;
  .card__heading{
        font-weight: 700;
        font-size:2.8rem;
        margin-bottom: 2rem;
    }
    .card__description{
        font-size: 1.8rem;
        margin-bottom:3rem;
        line-height:1.7;
        max-width:60rem;
        color:#666;
    }
}

@media(max-width: 56.25em){
    flex-direction:column;
    gap: 2rem;
    margin-bottom: 8rem;
    text-align: center;
}
`




