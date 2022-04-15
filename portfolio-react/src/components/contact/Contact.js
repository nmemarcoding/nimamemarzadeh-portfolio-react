import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
export default function Contact() {
  


 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s9s96r9', 'template_cw5ngq9', form.current, 'mOhboXmdQ0whl1jzN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
      <div className="contact">
          <div className="left__contact">
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
           
            <input type="text" name="user_name" />
            
            <label>Email</label>
           
            <input type="email" name="user_email" />
           
            <label>Message</label>
            
           
            <textarea name="message" className="contact__textarea" />
            
     
            <input type="submit" className="btn" value="Send" />
       
            </form>
        </div>
        <div className="right__contact">
            <h2>310-849-7724</h2>
            <h2>nmemarcoding@gmail.com</h2>
        </div>
    </div>
  );
}
