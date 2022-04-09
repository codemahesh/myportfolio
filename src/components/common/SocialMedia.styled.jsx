import styled from "styled-components";

export const StyledSocialHome = styled.div`
display: flex;
position: absolute;
top:50%;
font-size:0.9rem;
transform:translateY(-50%);
flex-direction:column;
background: #fff;
box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
padding: 2rem;
gap: 3rem;
@media(max-width:56.25rem){
    display:none;
}
`
export const StyledSocialFooter = styled.div`
display:flex;
margin-top: 2rem;
gap:2rem;
`