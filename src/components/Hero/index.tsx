import Image from 'next/image'
import styles from './Hero.module.css'

import {FaGithub, FaLinkedinIn, FaTwitter, FaArrowDown} from 'react-icons/fa'
import {MdOutlineComputer} from 'react-icons/md'

import Logo from '../../../public/logo-light.svg'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image
              src={Logo}
            />
          </div>
          <div className={styles.social}>
            <ul>
              <li>
                <a href="https://github.com/joaomaranhao" target="_blank">
                  <FaGithub
                    className={styles.icon}
                    size={'2.5rem'}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joaofmaranhao"  target="_blank">
                  <FaLinkedinIn
                    className={styles.icon}
                    size={'2.5rem'}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/joaofmaranhao"  target="_blank">
                  <FaTwitter
                    className={styles.icon}
                    size={'2.5rem'}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.text}>
            <h1>João Maranhão</h1>
            <p>
              <MdOutlineComputer
                size={'1.5rem'}
                className={styles.laptop}
              />
              Desenvolvedor de software
            </p>
          </div>
          <button className={styles.cta}>
            Projetos
            <FaArrowDown
              size={'1.2rem'}
              className={styles.arrow}
            />
            </button>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src="/logo-colors.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero