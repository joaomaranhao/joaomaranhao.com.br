import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>João Maranhão | Desenvolvedor de software</title>
      </Head>
      <Hero />
      <About />
    </div>
  )
}
