 import styled from "styled-components";

 export const StyledFooterSection = styled.section`
     background: #000;
    color: #fff;
    .copyright{
    padding: 4rem 0;
    border-top: 1px solid #444;
    color: #eee;
    font-size: 1.2rem;
    text-align: left;
    text-align: center;
}
.copyrighttext{
    text-decoration:none;
    color:#facf0f;
}

.footer__Flex-Container{
    display: flex;
    justify-content: space-between;
    padding: 8rem 0;
    gap:2rem;

h3{
    font-size: 2.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}
p{
    margin-top: 2rem;
    color: #eee;
    font-size: 1.5rem;
    line-height: 1.7;
}
.footerIntro{
    width: 100%;
    max-width: 50rem;
    order:1;
}

.socialIcon{
    order:2;  
}

.icons {
    margin-top: 10rem;

}

@media (max-width: 37.5em){
    display: block;
    .socialIcon{
 margin-bottom:5rem;   
}
    
}
@media (max-width: 56.25em){
    padding: 6rem 0;
}

}
 `

