import React from 'react'
import styles from '../css/Contact.module.css'
import contactAnimation from "../scripts/contactAnimations";
import Footer from "../navigation/Footer";
import Link from "next/link";


const Contact = () => {

    contactAnimation()

    return (
        <div className={styles.containerContact}>
            <div className={styles.grtng}>
                <p className={styles.slogan}>We are glad to get in touch with you!</p>
            </div>
            <div className={styles.contactContent}>
                <div className={styles.socialMediaSection + ' ' + styles.pageContent}>
                    <p className={styles.subslogan}>Find us in social media:</p>
                    <div className={styles.icons}>
                        <Link className={styles.iconLink} href="/"><img className={styles.icon} src='/images/icons/Facebook.svg' alt="social-media-icons" /></Link>
                        <Link className={styles.iconLink} href="/"><img className={styles.icon} src='/images/icons/Twitter.svg' alt="social-media-icons" /></Link>
                        <Link className={styles.iconLink} href="/"><img className={styles.icon} src='/images/icons/Telegram.svg' alt="social-media-icons" /></Link>
                        <Link className={styles.iconLink} href="/"><img className={styles.icon} src='/images/icons/Instagram.svg' alt="social-media-icons" /></Link>
                    </div>
                </div>
                <div className={styles.emailSection + ' ' + styles.pageContent}>
                    <p className={styles.subslogan}>Or contact us via email:</p>
                    <Link href="mailto:contact@trail.com" className={styles.ourEmail}>contact@trails.com</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;