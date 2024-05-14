import styles from'./App.module.css'
import About from './components/AboutComponent/About'
import Contact from './components/ContactComponent/contact'
import Hero from './components/HeroComponent/Hero'
import Navbar from './components/Navbar/Navbar'
import PersonalProjects from './components/PersonalProjects/PersonalProject'
import Projects from './components/ProjectComponent/Project'
import Skills from './components/SkillsComponent/Skills'

function App() {
  
  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <PersonalProjects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
