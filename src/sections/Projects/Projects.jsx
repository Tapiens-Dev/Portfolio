import React from 'react'
import styles from './ProjectsStyle.module.css';
import vibber from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import fitLift from '../../assets/fitlift.png';
import hipsster from '../../assets/hipsster.png';
import ProjectsCard from '../../common/ProjectsCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}> 
            <ProjectsCard 
                src={vibber}  
                link='https://https://github.com/Ade-mir/company-landing-page-2' 
                h3='Vibber'
                p='Streaming App'
            />

            <ProjectsCard 
                src={freshBurger}  
                link='https://https://github.com/Ade-mir/company-landing-page-2' 
                h3='Fresh Burger'
                p='Hamburger Restaurant'
            />

            <ProjectsCard 
                src={hipsster}  
                link='https://https://github.com/Ade-mir/company-landing-page-2' 
                h3='Hipsster'
                p='Glasses Shop'
            />

            <ProjectsCard 
                src={fitLift}  
                link='https://https://github.com/Ade-mir/company-landing-page-2' 
                h3='FitLift'
                p='Fitness App'
            />
        </div>
    </section>
  )
}

export default Projects
