import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/pages/Fipe.module.css'

import FipeDesktop from '../../public/images/fipe-desktop.jpg'

const Fipe = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Tabela Fipe</h1>
          <a href="https://brazilian-vehicles-and-price.vercel.app/" rel='noreferrer' target='__blank'>
            <div className={styles.imagesContainer}>
              <Image
                src={FipeDesktop}
                alt='Screenshot do site da Tabela Fipe, na versão para desktop'
              />
            </div>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <h2 className={styles.description}>
            Veículos brasileiros e seus respectivos preços.
            </h2>

            <p>Aplicação criada com o intuito de ser um serviço para consulta de preços de carros, motos e caminhões de acordo com a Tabela Fipe</p>

            <h3>Construído com:</h3>
            <ul>
              <li>NextJS</li>
              <li>Tailwind CSS</li>
              <li>Typescript</li>
              <li>Dados <a href="https://deividfortuna.github.io/fipe/">dessa API</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fipe
