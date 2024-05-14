import React from 'react'
import skills from '../../data/skills.json'
import styles from './Skills.module.css'
import uiIcon from '../../../assets/about/uiIcon.png'
import html from '../../../assets/skills/html.png'
import css from '../../../assets/skills/css.png'
import js from '../../../assets/skills/js1.png'
import react from '../../../assets/skills/react.png'
import bootstrap from '../../../assets/skills/bootstrap.png'
import tailwind from '../../../assets/skills/tailwindCss.png'
import git from '../../../assets/skills/gitlogo.png'
import redux from '../../../assets/skills/redux.svg'

const Skills = () => {
    console.log(skills)
    return (
        <section className={styles.container} id='skills'>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                {/* <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={`${styles.skillicon} ${styles[skill.className]}`}>
                                    <img src={`assets/skills/${skill.imageSrc}`} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        )
                    })}
                </div> */}
                <div className={styles.skills}>

                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={html} alt={skills[0].title} />
                        </div>
                        <p>{skills[0].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={css} alt={skills[1].title} />
                        </div>
                        <p>{skills[1].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={js} alt={skills[2].title} />
                        </div>
                        <p>{skills[2].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={react} alt={skills[3].title} />
                        </div>
                        <p>{skills[3].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={redux} alt={skills[4].title} />
                        </div>
                        <p>{skills[4].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={bootstrap} alt={skills[5].title} />
                        </div>
                        <p>{skills[5].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={tailwind} alt={skills[6].title} />
                        </div>
                        <p>{skills[6].title}</p>
                    </div>
                    <div className={styles.skill}>
                        <div className={styles.skillicon}>
                            <img src={git} alt={skills[7].title} />
                        </div>
                        <p>{skills[7].title}</p>
                    </div>

                </div>
                <div className={styles.skillsDetails}>
                    <h2>Techiebears PVT LTD</h2>
                    <div className={styles.experience}>
                        <h3>Tata Motors</h3>
                        <ul>
                            <li>"Contributed to the development of Tata Motors project on Drupal Using Bootstrap. </li>
                            <li>"Designed and developed user interfaces following best practices and industry standards."</li>
                            <li>"Ensured responsiveness and optimal performance of the website across various devices.."</li>
                        </ul>
                    </div>
                    <div className={styles.experience}>
                        <h3>Marina Homes (Working)</h3>
                        <ul>
                            <li>"Developed the Marina Home project using React js and Tailwind CSS."</li>
                            <li>"Designed and implemented reusable components for efficient development."</li>
                            <li>"Collaborated with the team to meet client requirements and deliver high-quality UI designs."</li>
                            <li>"Ensured responsiveness and optimal performance of the website across various devices."</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills