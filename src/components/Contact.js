import React from 'react';
import "./styles/Contact.css";
import { Footer } from "./";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for contacting me, I'll be in touch");
    }

    return (
        <div>
            <div id="form_wrapper">
                <h2>Contact Me</h2>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <form id="contact_form" onSubmit={(e) => handleSubmit(e)}>
                    <div id='names_wrapper'>
                        <div className='name field_wrapper'>
                            <label htmlFor='first_name'>First name</label>
                            <input type="text" id="first_name" placeholder='Enter your first name' required/>
                        </div>
                        <div className='name field_wrapper'>
                            <label htmlFor='last_name'>Last name</label>
                            <input type="text" id="last_name" placeholder='Enter your last name' required/>
                        </div>
                    </div>
                    <div className='field_wrapper' id="email_wrapper">
                        <label htmlFor='email'>Email</label>
                        <input type="text" id="email" placeholder='yourname@email.com' />
                    </div>
                    <div className='field_wrapper' id="message_wrapper">
                        <label htmlFor='message'>Message</label>
                        <textarea id="message" placeholder="Send me a message and I'll reply you" required/>
                    </div>
                    <div className='field_wrapper' id="check_wrapper">
                        <input type="checkbox" id="checkbox" required/>
                        <label htmlFor='checkbox'>You agree to providing your data to Veed who may contact you.</label>
                    </div>
                    <button>Send message</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Contact;