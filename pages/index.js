import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/pages/Home.module.css'
import { MdComputer } from 'react-icons/md'
import Card from '../components/Card'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Home | João Maranhão - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.intro}>
          <div className={styles.text}>
            <h1>João<br></br>Maranhão</h1>
            <div className={styles.title}>
              <div className={styles.icon}>
                <MdComputer />
              </div>
              <span>Desenvolvedor Front-end</span>
            </div>
          </div>
          <div className={styles.colored}>
          <a>
            <img src="/logo-colors.svg" alt=""/>
          </a>
          </div>
        </div>
        <div className={styles.portfolio}>
          <div className={styles.container}>
            <h3>Portfolio</h3>
          </div>
          <div className={styles.container}>
            <Card title="Tabela Fipe"
            text="Serviço de consulta de carros brasileiros e seus respectivos preços."
            imgSrc="/images/brazilian-vehicles-and-price-mobile.jpg"
            url="https://brazilian-vehicles-and-price.vercel.app/"
            repo="https://github.com/joaomaranhao/brazilian-vehicles-and-price" />
            <Card title="Tabela Fipe"
            text="Serviço de consulta de carros brasileiros e preços."
            imgSrc="/images/brazilian-vehicles-and-price-mobile.jpg"
            url="https://brazilian-vehicles-and-price.vercel.app/"
            repo="https://github.com/joaomaranhao/brazilian-vehicles-and-price" />
          </div>
        </div>
      </Layout>
    </div>
  )
}
