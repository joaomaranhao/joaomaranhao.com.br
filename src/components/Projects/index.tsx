import TabelaFipe from '../../../public/images/fipe-desktop.jpg'
import WeatherApp from '../../../public/images/weather-app.jpg'
import Channel from '../../../public/images/channel.jpg'
import Project from '../Project'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Projetos</h2>
        <div className={styles.projects}>
          <Project
            imgAlt={'Foto do aplicativo de Tabela Fipe, visão Desktop e mobile.'}
            projectName="Tabela FIPE"
            href={'/fipe'}
            imgSrc={TabelaFipe}
          />
          <Project
            imgAlt={'Screenshot do site da Weather App, na versão para desktop'}
            projectName="Weather App"
            href={'/weather'}
            imgSrc={WeatherApp}
          />
          <Project
            imgAlt={'Screenshot do canal do Youtube "League of Legends Replays" que foi criado programaticamente'}
            projectName="Automatização de canal do Youtube"
            href={'/channel'}
            imgSrc={Channel}
          />

        </div>
      </div>
    </section>
  )
}

export default Projects
