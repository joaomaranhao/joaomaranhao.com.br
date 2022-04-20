import Image from 'next/image'
import Link from 'next/link'
import Socials from '../Socials'

import styles from './Hero.module.css'

import { FaArrowDown } from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'

import Logo from '../../../public/logo-light.svg'
import LogoColors from '../../../public/logo-colors.svg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt="Logotipo JM"
            />
          </div>
          <Socials />
          <div className={styles.text}>
            <h1>João Maranhão</h1>
            <p>
              <MdOutlineComputer
                className={styles.laptop}
              />
              Desenvolvedor de software
            </p>
          </div>
          <Link href="#projects">
            <a className={styles.cta}>
              Projetos
              <FaArrowDown
                size={'1.2rem'}
                className={styles.arrow}
              />
            </a>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={LogoColors}
              layout="fill"
              alt="Logo JM em branco, em cima de um fundo com 5 faixas diagonais coloridas em rosa, amarelo, azul, azul escuro e cinza"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
