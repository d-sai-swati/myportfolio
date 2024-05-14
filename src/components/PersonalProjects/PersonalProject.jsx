import React from 'react'
import projects from '../../data/personalProject.json'
import styles from './PersonalProject.module.css'
const PersonalProjects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Personal Projects</h2>
      <div className={styles.projects}> {
        projects.map((project , id) =>{
          return (<div key={id} className={styles.project}>
            <img className={styles.projectImg} src={`../assets/projects/${project.imageSrc}`} alt="" />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <a className={styles.link} href={project.demo}>Demo</a>
                <a className={styles.link} href={project.source}>Source</a>
              </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default PersonalProjects
