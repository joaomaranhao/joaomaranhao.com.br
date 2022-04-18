import { useForm } from 'react-hook-form'
import axios from 'axios'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import styles from './Contact.module.css'

const Contact = () => {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const onSubmit = async values => {
    const config = {
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: values
    }

    try {
      const response = await axios.post(config.url, { data: config.data }, { headers: config.headers })
      if (response.status === 200) {
        console.log('Success')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3>Contato</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.field}>
                <input
                  type="text"
                  {...register('name', {
                    required: 'O nome é obrigatório',
                    validate: value => value !== 'admin' || 'Nice try!'
                  })}
                  placeholder='Nome'
                />
                {errors.name && errors.name.message}
              </div>

              <div className={styles.field}>
                <input
                  type="text"
                  {...register('email', {
                    required: 'O email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  placeholder='Email'
                />
                {errors.email && errors.email.message}
              </div>

              <div className={styles.field}>
                <textarea
                rows={4}
                placeholder="Mensagem"
                {...register('message', {
                  required: 'A mensagem é obrigatória'
                })}
                />
                {errors.message && errors.message.message}
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
