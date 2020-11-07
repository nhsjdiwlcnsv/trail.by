import React from 'react'
import '../css/Contact.css'
import scrollToTop from '../scripts/scrollToTop'
import contactAnimation from "../scripts/contactAnimations";
import Footer from "../navigation/Footer";
import telegram from '../media/icons/Telegram.svg'
import facebook from '../media/icons/Facebook.svg'
import instagram from '../media/icons/Instagram.svg'
import twitter from '../media/icons/Twitter.svg'


const Contact = () => {

    scrollToTop()
    contactAnimation()

    return (
        <div className="containerContact">
            <div className="grtng">
                <p className="slogan">We are glad to get in touch with you!</p>
            </div>
            <div className="contact-content">
                <div className="social-media-section page-content">
                    <p className="subslogan">Find us in social media:</p>
                    <div className="icons">
                        <a href="/"><img className="icon" src={ facebook } alt="social-media-icons" /></a>
                        <a href="/"><img className="icon" src={ twitter } alt="social-media-icons" /></a>
                        <a href="/"a><img className="icon" src={ telegram } alt="social-media-icons" /></a>
                        <a href="/"><img className="icon" src={ instagram } alt="social-media-icons" /></a>
                    </div>
                </div>
                <div className="email-section page-content">
                    <p className="subslogan">Or contact us via email:</p>
                    <a href="mailto:contact@trail.com" className="our-email">contact@trails.com</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;