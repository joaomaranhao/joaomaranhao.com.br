import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/pages/Fipe.module.css'

import FipeDesktop from '../../public/images/weather-app.jpg'

const Weather = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.left}>
          <a href="https://weather-app-joaomaranhao.vercel.app/" rel='noreferrer' target='__blank'>
            <div className={styles.imagesContainer}>
              <Image
                src={FipeDesktop}
                alt='Screenshot do site da Weather App, na versão para desktop'
              />
            </div>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <h2 className={styles.description}>
            Aplicativo de previsão do tempo
            </h2>

            <p>Previsão do tempo feita com dados fornecidos pela API do <a href="https://api.weatherapi.com/v1">Weather API</a></p>

            <h3>Construído com:</h3>
            <ul>
              <li>NextJS</li>
              <li>CSS Modules</li>
              <li>Typescript</li>
              <li>Dados <a href="https://api.weatherapi.com/v1">dessa API</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
