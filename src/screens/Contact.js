import React from 'react';
import '../css/Contact.css'
import gmail from '../media/icons/Gmail.svg'
import viber from '../media/icons/Viber.svg'
import whatsapp from '../media/icons/WhatsApp.svg'
import telegram from '../media/icons/Telegram.svg'
import facebook from '../media/icons/Facebook.svg'
import vk from '../media/icons/VK.svg'
import instagram from '../media/icons/Instagram.svg'
import twitter from '../media/icons/Twitter.svg'


const Contact = () => {
    return (
        <div className="containerContact">
            <div className="social-media">
                <p className="slogan">We glad to get in touch with you!</p>
                <div className="social-media-icons">
                    <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="gmail icon" src={facebook} /></a>
                    <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="vk icon" src={vk} /></a>
                    <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="twitter icon" src={twitter} /></a>
                    <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="instagram icon" src={instagram} /></a>
                </div>
            </div>
            <div className="messengers">
                <div className="container container-mail">
                    <div className="mail-link">
                        <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="gmail icon" src={gmail}/></a>
                    </div>
                    <p>contact@trail.com</p>
                </div>
                <div className="container container-messengers">
                    <div className="messengers-link">
                        <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="gmail icon" src={viber} /></a>
                        <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="gmail icon" src={telegram} /></a>
                        <a className="icon" href="https://facebook.com/groups/1732287364881493"><img alt="gmail icon" src={whatsapp} /></a>
                    </div>
                    <p>+375 29 689 73 49</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;