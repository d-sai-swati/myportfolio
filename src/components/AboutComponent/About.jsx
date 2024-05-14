import React from 'react'
import aboutImg from '../../../assets/about/aboutImage.png'
import cursorIcon from '../../../assets/about/cursorIcon.png'
import serverIcon from '../../../assets/about/serverIcon.png'
// import uilcon from '../../../assets/about/uilcon.ping'
import uiIcon from '../../../assets/about/uiIcon.png'
import skillIcon from '../../../assets/about/package.png'

import styles from './About.module.css'
const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={aboutImg} alt="" />
                <ul className={styles.aboutItmes}>
                    <li className={styles.aboutItem}>
                        <img src={cursorIcon} alt="" />
                        <div className={styles.aboutItemtext}>
                            <h3>Frontend Developer</h3>
                            <p>I’m a front-end developer with Hands On Experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={skillIcon} alt="" />
                        <div className={styles.aboutItemtext}>
                            <h3>Skill</h3>
                            <p>Html 5, Css 3, Javascript, React JS, Bootstrap, Tailwind, Drupal CSM</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={uiIcon} alt="" />
                        <div className={styles.aboutItemtext}>
                            <h3>Experience</h3>
                            <p>Working as a Frontend Developer in Techiebears pvt ltd From 7th jult 2023 to till date</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default About