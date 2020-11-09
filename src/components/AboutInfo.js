import React from 'react';
import styles from '../css/AboutInfo.module.css';

class AboutInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            number: this.props.number,
            email: this.props.email,
            position: this.props.position
        }
    }

    render () {
        return (
            <div className={styles.infoСontainer + this.state.position}>
                <p className={styles.name}>{this.state.name}</p>
                <div className={styles.section}>
                    <p className={styles.header}>Phone number</p>
                    <p className={styles.number}>{this.state.number}</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.header}>Email</p>
                    <p className={styles.email}>{this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default AboutInfo