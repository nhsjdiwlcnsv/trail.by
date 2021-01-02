import React, {useContext} from 'react'
import Link from '../Link'
import ImageLink from '../ImageLink'
import styles from './Navigation.module.css'
import { ThemeContext } from '../../theme'


export default function Navigation() {

    const theme = useContext(ThemeContext)

    return (
        <div className={styles.root} style={{"--height-after": 6 + 'px'}}>
            <div>
                <ImageLink
                    href="/"
                    alt="logo"
                    src={theme.name === 'light' ? '/images/logo/Logo.svg' : '/images/logo/LogoBlack.svg'}
                    className={styles.logo}
                    delay={3200}
                />
            </div>
            <div className={styles.item}>
                <Link
                    href="/contact"
                    delay={2100}
                >
                    Contact
                </Link>
            </div>
            <div className={styles.item}>
                <Link
                    href="/about"
                    delay={2300}
                >
                    About us
                </Link>
            </div>
            <div className={styles.item}>
                <Link
                    href="/trails"
                    delay={2500}
                >
                    All trails
                </Link>
            </div>
        </div>
    )
}
