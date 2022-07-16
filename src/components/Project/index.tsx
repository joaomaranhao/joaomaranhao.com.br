import Image from 'next/image'
import Link from 'next/link'

import { FaArrowDown } from 'react-icons/fa'
import styles from './Project.module.css'

const Project = ({ href, imgSrc, imgAlt, projectName }) => {
  return (
    <div className={styles.project}>
            <Link href={href}>
              <a className={styles.imageContainer}>
                <div className={styles.title}>
                  <h3>{projectName}</h3>
                  <FaArrowDown />
                </div>
                <Image
                className={styles.photo}
                layout='responsive'
                objectFit='cover'
                loading='lazy'
                src={imgSrc}
                alt={imgAlt}
                />
              </a>
            </Link>
          </div>
  )
}

export default Project
