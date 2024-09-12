import React from 'react';
import './Contact.css'; // Import CSS for Contact component
import ahadprofile from './assest/ahadprofile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';


function Contact() {
    return (
        <>
            <NavBar />
            <div className="contactmain">
                <div className="contimg">
                    <img src={ahadprofile} alt="Intro" />
                </div>
                <div className="contactcontent">
                    <h2>Contact Me</h2>
                    <p className="content">Let's connect and make something amazing together! Whether you have a question, a project idea, or just want to say hi, I'm just a message away. I'll get back to you within 24 hours. Looking forward to hearing from you!</p>
                </div>
                <nav>
                    <ul className='SocialMediaButton'>
                        <li>
                            <a href="https://github.com/Ahad275" target="_blank" rel="noopener noreferrer">
                                <button className='gitbut'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mohammad-ahad-633719227/" target="_blank" rel="noopener noreferrer">
                                <button className='linkedinbut'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:ahadaa9369@gmail.com">
                                <button className='emailbut'>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/m_ahad275?igsh=MTNxbDhlc3QwcGtxOA==" target="_blank" rel="noopener noreferrer">
                                <button className='instabut'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <button className='twitterbut'>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <button className='fbbut'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="resumebutton">
                    <a href="https://drive.google.com/file/d/1cT8nKDtObxOH13sOibdYrJadJkaJ78Nk/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                        See My Resume
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
