import styled from 'styled-components';

export const AboutSectionContainer = styled.section`
background: #fafafa;
padding: 12rem 0;
@media (max-width: 56.25em){
    padding: 8rem 0;
}

.about__container{
    display: flex;
    margin:auto;
    gap:10rem;
    
    @media(max-width: 56.25em){
        flex-direction: column;
        gap: 8rem;
    }
}
.about__content{
    flex:1;
    font-size: 1.8rem;
    color: #666;
    max-width: 60rem;
    line-height: 1.7;
    margin-bottom: 1rem;
}

.about__subheading{
font-weight: 700;
    font-size: 2.8rem;
    margin-bottom: 3rem;
}

.about__description{
    color: #666;
}
.about__skill{ 
flex:1;
@media (max-width: 37.5em){
    font-size: 2.4rem;
}
}

.about__skillcontainer{
display: flex;
flex-wrap: wrap;
}

`




