import styled from 'styled-components'

export const StyledHeader = styled.nav`
position: fixed;
    width: 100%;
    z-index:1;
    margin:0;
    padding:0;
    background: #fff;
    box-shadow: 0 10px 100px rgb(0 0 0 / 10%);

    
.header__container{
display:flex;
position:fixed;
flex-wrap:nowrap;
position:relative;
justify-content: space-between;
align-items:center;
}

`

export const StyledLogo = styled.div`
display:flex;
padding: 2rem 0 2rem 5rem;
align-items:center;
`
export const LogoIcon = styled.img`
height:5rem;
width:5rem;
clip-path: circle(50% at 50% 50%);
cursor:pointer;
margin-right:1.5rem;
`
export const LogoName = styled.h1`
 font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    margin:0;
    cursor:pointer;
    white-space:nowrap;
    color: #333;
    letter-spacing: 1px;
    &:hover{
    color:#facf0f
    }
`
export const BurgerIconStyled = styled.div`
dispay:none;
@media(max-width:767px){
width:4rem;
height:4rem;
margin-left:2rem;
white-space:nowrap;
display:flex;
padding-right:6rem;
flex-flow: column nowrap;
justify-content:space-around;

div{
width:4rem;
height:0.5rem;
border-radius:10px;
background-color:${props => props.status ? "#ccc" : "#333"};
transform-origin:1px;
transition: all 0.5s;
&:nth-child(1){
    transform:${({ status }) => status ? "rotate(45deg)" : "rotate(0)"}
    
}
&:nth-child(2){
    transform:${({ status }) => status ? "translateX(100%)" : "translateX(0)"};
    opacity:${({ status }) => status ? 0 : 1};
}
&:nth-child(3){
    transform:${({ status }) => status ? "rotate(-45deg)" : "rotate(0)"}
}
}
}
`

export const MenuList = styled.ul`

visibility:${({ status }) => status ? "visible" : "hidden"};
opacity:${({ status }) => status ? "1" : "0"};
width:100%;
z-index:2;
left:0;
display:flex;
position:absolute;
top: 100%;
flex-direction:column;
list-style:none;
background: #fff;
overflow: hidden;
padding:0;
padding-right:2rem;
margin:0;
transition: all 0.3s;
text-transform:uppercase;

@media(min-width:768px){
    flex-flow: row nowrap;
    width:auto;
    height:auto;
    opacity:1;   
    visibility:visible; 
    position:static;
    justify-content:flex-end;
    .menu__link{
        border-top: none !important;
        border-bottom: none !important;
    }
}

.menu__link{
    display: list-item;
    text-align: -webkit-match-parent;
    text-decoration: none;
    padding: 2.5rem 3rem;
    font-size: 1.5rem;
    color: #333;
    cursor:pointer;
    text-align: right;
    border-bottom: 1px solid #eee;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color .3s;
    border-top: 1px solid #eee;
    &:hover{
    color:var(--color-primary);
    }
}
`