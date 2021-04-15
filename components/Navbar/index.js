import Link from 'next/link'
import { useState } from 'react'
import MenuIcon from '../MenuIcon'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className={styles.nav}>
        <MenuIcon btnState={setIsOpen} />
        <Link href="/">
          <a>
            <img src="logo.svg" alt="João Maranhão" className={styles.logo}/>
          </a>
        </Link>
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
