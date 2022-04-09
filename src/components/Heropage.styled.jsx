import styled from "styled-components";
import background from '../assets/svg/background.svg'

export const StyledHeroPage = styled.div`
background: linear-gradient(to bottom,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(${background});
width:100%;
height:100vh;
display:grid;
position:relative;
min-height: 70rem;
max-height: 120rem;
align-items:center;
background-size: 100vw;

.hero__content{
display: flex;
width:clamp(50ch,90%,150ch);
margin: auto;
max-width:90rem;
align-items:center;
flex-direction: column;
}


.hero__title{
text-align:center;
font-size:5.5rem;
margin:0;
padding:0;
letter-spacing:2px;
font-weight:700;

@media(max-width:79.4rem){
    font-size:5rem;
    margin:2rem 0;
}
@media(max-width:28.375rem){
    font-size:3rem;
    margin:2rem 0;
}
}

.hero__description{
font-size: 2rem;
line-height:1.5;
padding:2rem 15rem 3rem 15rem;
color:#333;
width:100%;
text-align:center;
font-weight:400;
letter-spacing: 1px;
@media(max-width:92.2rem){
    padding:0rem;
    margin-bottom:5rem;
    font-size:2rem;
}
@media(max-width:28.375rem){
    font-size:1.5rem;

}
}

`





