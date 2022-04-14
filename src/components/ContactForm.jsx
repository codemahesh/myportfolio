import React,{useRef} from 'react';
import { SmallButton } from 'components/common/Button';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactFormContainer } from 'components/ContactSection.styled';
import emailjs from '@emailjs/browser';
    function ContactForm() {
        const form = useRef();
        
        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_8g82xns', 'template_a79nk9e', form.current, 'cxaGbrw6VrXKGJqUo')
                .then((result) => {
                    form.current.reset();
                    toast.success('Form Sucessfully Submitted!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                    console.log(result.text);
                }, (error) => {
                        toast.error('Something went wrong!!! form not submitted', {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          });
                    console.log(error.text);
                });
        }

        return (
            <>
                <ToastContainer />
                
                <ContactFormContainer >
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form-group form-control-lg contactFormField'>
                            <label htmlFor="name" className="contactFormLabel">Name</label>
                            <input type="text" name="name" className="contactFormInput" id="name" placeholder='Enter Your Name' />
                        </div>
                        <div className='form-group form-control-lg contactFormField '>
                            <label htmlFor="email" className="contactFormLabel">Email</label>
                            <input type="email" className="contactFormInput" name="user_email" id="email" placeholder='Enter your Email' />
                        </div>
                        <div className="form-group form-control-lg contactFormField">
                            <label htmlFor="message" className="contactFormLabel">Message</label>
                            <textarea className="contactFormInput" id="message" name ="message" rows="7" placeholder='Enter your message'></textarea>
                        </div>
                        <SmallButton type="submit" >Submit</SmallButton>
                    </form>
                </ContactFormContainer>

            </>
        )
    }

export default ContactForm