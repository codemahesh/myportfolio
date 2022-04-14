
import styled  from 'styled-components';
export const StyledButton = styled.button`
    background: var(--color-primary);
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    font-weight: 700;
    outline:none;
    cursor:pointer;
    border:0;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
    transition: transform .3s;
`

export const SmallButton = styled(StyledButton)`
color: #111;
margin:1.5rem auto;
padding: 1.5rem 5rem;
font-size: 1.6rem;

`
export const HeroButton =styled(StyledButton)`
margin:0 auto 1rem auto;
padding: 2rem 7rem;
font-size: 2rem;
color: #333;
@media(max-width:92.2rem){
  font-size:1.5rem
  padding:1.5 4rem;
}
@media(max-width:28.375rem){
    font-size:1.5rem;
    padding:1.5 4rem;
}
`
export const ContactButton = styled(StyledButton)`
    width: 30%;
    padding: 2rem 4rem;
    font-size: 1.6rem;
`

