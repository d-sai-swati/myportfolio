import React from 'react'
import heroImg from '../../../assets/hero/heroImage.png'
import styles from './Hero.module.css'


const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Swati</h1>
                <p className={styles.description}>
                    I have completed my Master's in Computer Applications (MCA) in 2022. Throughout my academic journey, I have honed my skills and gained Knowledge in various technologies, including HTML, CSS, Tailwind , Bootstrap , JavaScript, and React JS.
                </p>
                <a href="mailto:swatidasi919@gmail.com" className={styles.contactBtn}>Contact</a>
            </div>
            <img src={heroImg} alt="hero Image" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero