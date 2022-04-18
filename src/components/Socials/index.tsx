import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import styles from './Socials.module.css'

const Socials = () => {
  return (
    <div className={styles.social}>
            <ul>
              <li>
                <a href="https://github.com/joaomaranhao" rel='noreferrer' target="_blank">
                  <FaGithub
                    className={styles.icon}
                    size={'2.5rem'}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joaofmaranhao" rel='noreferrer' target="_blank">
                  <FaLinkedinIn
                    className={styles.icon}
                    size={'2.5rem'}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/joaofmaranhao" target="_blank" rel="noreferrer">
                  <FaTwitter
                    className={styles.icon}
                    size={'2.5rem'}
                  />
                </a>
              </li>
            </ul>
          </div>
  )
}

export default Socials
