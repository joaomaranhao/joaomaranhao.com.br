import TabelaFipe from '../../../public/images/brazilian-vehicles-and-price.jpg'
import Project from '../Project'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Projetos</h2>
        <div className={styles.projects}>
          <Project
            href={'/fipe'}
            imgSrc={TabelaFipe}
          />

        </div>
      </div>
    </section>
  )
}

export default Projects
