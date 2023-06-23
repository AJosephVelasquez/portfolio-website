import React from "react";
import { useNavigate } from "react-router-dom";
import './contact.css'
import {
    FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookMessenger, FaGithub
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';

function Contact(){

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/thank-you/");
      };

    return(
        <section className="contact section animate-appear">
            <h2 className="section-title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact-container container grid">
                <div className="contact-data">
                    <h3 className="contact-title">Don't be Shy!</h3>

                    <p className="contact-description">
                        I would be delighted to hear from you! Whether you have a project in mind, offering a job opportunity, or simply want to connect, feel free to reach out to me. I'm passionate about programming and creating clean and responsive websites, and I'm always excited to explore new opportunities. You can contact me through the form or through my socials linked below. I'll make sure to respond as promptly as possible. Let's bring your ideas to life together!
                    </p>

                    <div className="contact-info">
                        <div className="info-item">
                            <FaEnvelopeOpen className="info-icon" />

                            <div>
                                <span className="info-title">Mail Me</span>
                                <h4 className="info-description">velasquezalain19@gmail.com</h4>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhoneSquareAlt className="info-icon" />

                            <div>
                                <span className="info-title">Call Me</span>
                                <h4 className="info-description">+639064767056</h4>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials">
                        <a href="mailto:velasquezalain19@gmail.com" className="contact-social-link"><SiGmail /></a>
                        <a href="https://m.me/velasquez.alainjoseph" className="contact-social-link"><FaFacebookMessenger /></a>
                        <a href="https://github.com/AJosephVelasquez" className="contact-social-link"><FaGithub /></a>
                    </div>
                </div>


                <form onSubmit={handleSubmit} method="POST" className="contact-form">
                    <div className="form-input-group">
                        <div className="form-input-div">
                            <input type="text" name="name" placeholder="Your Name" className="form-control" required />
                        </div>

                        <div className="form-input-div">
                            <input type="email" name="email" placeholder="Your Email" className="form-control"  required/>
                        </div>

                        <div className="form-input-div">
                            <input type="text" name="subject" placeholder="Your Subject" className="form-control" />
                        </div>
                    </div>

                    <div className="form-input-div">
                        <textarea placeholder="Your Message" name="message" className="form-control textarea" required></textarea>
                    </div>

                    <button className="button send-button">Send Message <span className="button-icon contact-button-icon"><FiSend /></span></button>
                </form>
            </div>
        </section>
    )
}

export default Contact;