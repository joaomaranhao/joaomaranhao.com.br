import Link from 'next/link'
import { useState } from 'react'
import MenuIcon from '../MenuIcon'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      <MenuIcon />
      <Link href="/">
        <a>
          <img src="logo.svg" alt="João Maranhão" className={styles.logo}/>
        </a>
      </Link>

    </nav>
  )
}

export default Navbar
