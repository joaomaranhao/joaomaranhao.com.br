import Image from 'next/image'
import Link from 'next/link'

import { FaArrowDown } from 'react-icons/fa'
import styles from './Project.module.css'

const Project = ({ href, imgSrc }) => {
  return (
    <div className={styles.project}>
            <Link href={href}>
              <a>
                <div className={styles.title}>
                  <h3>Tabela FIPE</h3>
                  <FaArrowDown />
                </div>
                <Image
                className={styles.photo}
                  src={imgSrc}
                  alt="Foto do aplicativo de Tabela Fipe, visão Desktop e mobile."
                />
              </a>
            </Link>
          </div>
  )
}

export default Project
