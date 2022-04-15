import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h2>Quem sou eu?</h2>
            <p>Olá! 🖐</p>
            <p>Meu nome é João Maranhão e eu gosto de criar coisas.</p>
            <p>E é exatament por isso que eu adoro desenvolvimento e JavaScript!</p>
            <p></p>
          </div>
        </div>
        <div className={styles.right}>

        </div>
      </div>

    </section>
  )
}

export default About