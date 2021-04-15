import Link from 'next/link'
import { useState } from 'react'
import MenuIcon from '../MenuIcon'
import styles from './Navbar.module.css'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <MenuIcon btnState={setIsOpen} />
          <Link href="/">
            <a>
              <img src="logo.svg" alt="João Maranhão" className={styles.logo}/>
            </a>
          </Link>
        </div>
        <div className={styles.social}>
          <a href="https://github.com/joaomaranhao">
            <FaGithub size="2em" />
          </a>
          <a href="https://www.linkedin.com/in/joaofmaranhao">
            <FaLinkedinIn size="2em" />
          </a>
          <a href="https://twitter.com/joaofmaranhao">
            <FaTwitter size="2em" />
          </a>
        </div>
      </nav>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/contact">
          <a>Contato</a>
        </Link>
      </div>
    </>
  )
}

export default Navbar
