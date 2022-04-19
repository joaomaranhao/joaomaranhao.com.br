import Image from 'next/image'
import Link from 'next/link'

import styles from './Navbar.module.css'

import Logo from '../../../public/logo-light.svg'
import Socials from '../Socials'

const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Link
          href='/'
          >
            <a className={styles.logo}>
                <Image
                  src={Logo}
                  alt="Logotipo JM"
                />
              </a>
          </Link>
        </div>
        <Socials />
      </div>
    </div>
    </div>
  )
}

export default Navbar
