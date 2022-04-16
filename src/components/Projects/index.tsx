import Image from 'next/image'
import Link from 'next/link'

import { FaArrowDown } from 'react-icons/fa'

import TabelaFipe from '../../../public/images/brazilian-vehicles-and-price.jpg'

import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Projetos</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <Link href='/'>
              <a>
                <div className={styles.title}>
                  <h3>Tabela FIPE</h3>
                  <FaArrowDown />
                </div>
                <Image
                className={styles.photo}
                  src={TabelaFipe}
                  alt="Foto do aplicativo de Tabela Fipe, visão Desktop e mobile."
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
