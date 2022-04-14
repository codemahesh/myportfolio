import styled from "styled-components";

export const StyledContactSection = styled.section`
background: linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url('../Images/svg/common-bg.svg');
padding:12rem 0;
background-size: cover;
background-position: center;
@media (max-width: 56.25em){
    padding: 8rem 0;
}
`

export const ContactFormContainer = styled.div`
box-shadow: rgb(100 100 111 / 20%) 0 7px 29px 0;
    background: #fff;
    padding: 4rem;
    margin-top: 6rem;
    max-width: 80rem;
    width: 95%;
    border-radius: 5px;
    margin: 5rem auto 0 auto;
    @media (max-width: 37.5em){
    padding: 3rem;
   }

   .butto {
  background-color: red;
  padding: 500rem;

  font-size: 20rem;
}
.contactFormField {
  margin-bottom: 4rem;
}
@media only screen and (max-width: 37.5em) {
  .contactFormField {
    margin-bottom: 3rem;
  }
}
.contactFormInput {
  color: #333;
  padding: 2rem;
  width: 100%;
  border: 1px solid #ebebeb;
  font-size: 1.6rem;
  letter-spacing: 0;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;
}

.contactFormInput:focus {
  outline: 0;
}

.contactFormLabel {
  color: #666;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
  text-align: left;
}

`
