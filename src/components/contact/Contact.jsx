import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
    const data_form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wm2huoc', 'template_vguhkzl', data_form.current, 'DuhaZgDPc5Djuhspo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
      };

    return (
        <section id='contact'> 
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>prince.chowdury 2018@gmail.com</h5>
                        <a href='mailto:prince.chowdury2018@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Prince Chowdury</h5>
                        <a href='https://m.me/prince.chowdury.1' target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <AiOutlinePhone className='contact__option-icon'/>
                        <h4>Mobile</h4>
                        <h5>747-312-4616</h5>
                        <a href='mailto:prince.chowdhury0821@yahoo.com' target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={data_form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder='Your message' required></textarea>
                    <button type='sumbit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;