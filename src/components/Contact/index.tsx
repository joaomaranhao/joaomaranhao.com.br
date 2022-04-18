import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>Contato</h3>

            <form>
              <div className={styles.field}>
                <input
                  type="text"
                  name="name"
                  placeholder='Nome'
                />
              </div>

              <div className={styles.field}>
                <input
                  type="text"
                  name="email"
                  placeholder='Email'
                />
              </div>

              <div className={styles.field}>
                <textarea
                name="message"
                rows={4}
                placeholder="Mensagem"
                >
                </textarea>
              </div>

              <div className={styles.field}>
                <button
                  type='submit'
                >
                  Enviar
                </button>
              </div>
            </form>

        </div>
        <div className={styles.right}>
          <div className={styles.social}>
              <ul>
                <li>
                  <a href="https://github.com/joaomaranhao" rel='noreferrer' target="_blank">
                    <FaGithub
                      className={styles.icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/joaofmaranhao" rel='noreferrer' target="_blank">
                    <FaLinkedinIn
                      className={styles.icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/joaofmaranhao" target="_blank" rel="noreferrer">
                    <FaTwitter
                      className={styles.icon}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.madeBy}>
              <p>Feito com <span>❤</span> por João Maranhão</p>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
