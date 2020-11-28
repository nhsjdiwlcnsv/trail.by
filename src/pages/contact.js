import React from 'react'
import styles from './Contact.module.css'
import Slogan from '../components/contacts/Slogan'
import Social from '../components/contacts/Social'
import Mail from '../components/contacts/Mail'


export default function Contact() {

    return (
        <div className={styles.containerContact}>
            <Slogan />
            <div className={styles.contactContent}>
                <Social />
                <Mail />
            </div>
        </div>
    )
}
