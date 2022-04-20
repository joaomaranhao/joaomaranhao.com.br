import Image from 'next/image'
import { SiNodedotjs, SiTypescript, SiMongodb, SiPostgresql, SiReact } from 'react-icons/si'

import joao from '../../../public/images/joao.jpg'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h2>Quem sou eu?</h2>
            <p>Olá! 🖐</p>
            <p>Meu nome é João Maranhão e eu gosto de criar coisas e resolver problemas.</p>
            <p>Formado em Comunicação Social e com mais de 10 anos de experiência em Motion Design, hoje me dedico ao desenvolvimento web.</p>
            <p>Vejo a web como uma mídia poderosa e democrática, perfeita para compartilhar conteúdo e conhecimento.</p>
            <p>Aqui estão algumas ferramentas que utilizo:</p>
            <ul className={styles.tools}>
              <li>
                <SiNodedotjs className={`${styles.icon} ${styles.node}`} />
              </li>
              <li>
                <SiTypescript className={`${styles.icon} ${styles.typescript}`} />
              </li>
              <li>
                <SiReact className={`${styles.icon} ${styles.react}`} />
              </li>
              <li>
                <SiMongodb className={`${styles.icon} ${styles.mongo}`} />
              </li>
              <li>
                <SiPostgresql className={`${styles.icon} ${styles.postgres}`} />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <Image
            className={styles.photo}
            src={joao}
            alt="Minha foto ostentando um bigodin"
            priority
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
