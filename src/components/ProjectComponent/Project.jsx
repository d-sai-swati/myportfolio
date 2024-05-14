import React from 'react'
import projects from '../../data/Project.json'
import styles from '../ProjectComponent/Project.module.css'

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
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

export default Projects
