import React, { useState } from 'react'
import styles from './Navbar.module.css'
// import { getImageURL } from '../../utilis'
import menuIcon from '../../../assets/nav/menuIcon.png'
import closeIcon from '../../../assets/nav/closeIcon.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>

            <div className={styles.menu}>
                <img className={styles.menuIcon} src={menuOpen ? closeIcon : menuIcon} alt="menu icon" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}> 
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
