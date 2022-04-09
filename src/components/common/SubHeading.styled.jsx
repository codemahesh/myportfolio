import styled from "styled-components";


export const StyledSubHeading = styled.section`
max-width:120rem;
text-align:center;
margin:auto;
margin-bottom:9rem;
@media(max-width: 56.25em){
    margin-bottom: 8rem;
}
`

export const Heading = styled.h2`
letter-spacing:1.5px;
font-size:3.5rem;
font-weight:700;
margin-bottom: 5rem;
position:relative;
&::after{
    content: '';
    position: absolute;
    top: calc(124% + 1.5rem);
    height: 5px;
    width: 3rem;
    background: #facf0f;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
}
`

export const HeadingDescription = styled.p`
font-size:2rem;
max-width:80rem;
margin:auto;
line-height:1.6;
font-weight:500;
color:#555;
@media (max-width: 37.5em){
    font-size: 1.8rem;
}
`