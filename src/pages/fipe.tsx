import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/pages/Fipe.module.css'

import Logo from '../../public/logo-light.svg'
import Socials from '../components/Socials'

const Fipe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
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
          <Socials />
        </header>
      </div>
    </div>
  )
}

export default Fipe
