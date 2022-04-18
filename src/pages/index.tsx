import Head from 'next/head'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

import styles from '../styles/pages/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>João Maranhão | Desenvolvedor de software</title>
      </Head>
      <Hero />
      <About />
      <div id='projects'>
        <Projects />
      </div>
      <Contact />
    </div>
  )
}
