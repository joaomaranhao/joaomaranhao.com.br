import Link from 'next/link'
import styles from './Footer.module.css'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <img src="/logo-claro.svg" alt=""/>
          </a>
        </Link>
        <div className={styles.social}>
          <a href="https://github.com/joaomaranhao" target="__blank" rel="noopener noreferrer">
            <FaGithub size="2em" />
          </a>
          <a href="https://www.linkedin.com/in/joaofmaranhao" target="__blank" rel="noopener noreferrer">
            <FaLinkedinIn size="2em" />
          </a>
          <a href="https://twitter.com/joaofmaranhao" target="__blank" rel="noopener noreferrer">
            <FaTwitter size="2em" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
