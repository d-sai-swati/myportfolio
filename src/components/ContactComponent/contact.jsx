import React from 'react'
import styles from './contact.module.css'
import email from '../../../assets/contact/emailIcon.png'
import linkedin from '../../../assets/contact/linkedinIcon.png'
import github from '../../../assets/contact/githubIcon.png'
const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.contact}>
        <div className={styles.contactItem}>
        <img src={email}/>
          <p>Email: swatidasi919@gmail</p>
        </div>
      </div>
      <div className={styles.social}>
        <h4>Follow Us:</h4>
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/"><img src={linkedin}/></a>
          <a href="https://github.com"><img src={github}/></a>
        </div>
      </div>
    </footer>
  )
}

export default Contact