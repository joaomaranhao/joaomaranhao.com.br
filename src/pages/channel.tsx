import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/pages/Project.module.css'

import Channel from '../../public/images/channel.jpg'

const ChannelPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.left}>
          <a href="https://github.com/joaomaranhao/video-maker/" rel='noreferrer' target='__blank'>
            <div className={styles.imagesContainer}>
              <Image
                src={Channel}
                alt='Screenshot do canal do Youtube criado de forma programática'
              />
            </div>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <h2 className={styles.description}>
            Automatização de canal de Youtube
            </h2>

            <p>A ideia desse projeto é automatizar a criação de vídeos, thumbnails e upload desse material para o Youtube.</p>
            <p>É um canal de replays de partidas de um jogo chamado League of Legends.</p>
            <p>Todo o processo é automatizado. Uma vez que o script é iniciado, ele consegue através de pequenos passos, criar conteúdo de forma programática.</p>
            <p>O canal pode ser visualizado nesse link: <a href='https://www.youtube.com/channel/UC-C_dsVX2-G2UYA9IoD5i3Q'>League of Legends Replays</a></p>

            <h3>Construído com:</h3>
            <ul>
              <li>Python</li>
              <li>Selenium para web scrapping</li>
              <li>HTML e CSS para criar thumbnail</li>
              <li>API do Youtube para upload</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChannelPage
