import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/pages/Home.module.css'
import { MdComputer } from 'react-icons/md'
import Card from '../components/Card'
import { getSortedPostsData } from '../lib/posts'
import PostContainer from '../components/PostContainer'

export default function Home ({ allPostsData }) {
  const lastPost = allPostsData[allPostsData.length - 1]
  return (
    <div>
      <Head>
        <title>Home | João Maranhão - Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={styles.intro}>
          <div className={styles.text}>
            <h1>João<br></br>Maranhão</h1>
            <div className={styles.title}>
              <div className={styles.icon}>
                <MdComputer />
              </div>
              <span>Desenvolvedor<br />Front-end</span>
            </div>
          </div>
          <div className={styles.colored}>
          <a>
            <img src="/logo-colors.svg" alt="João Maranhão"/>
          </a>
          </div>
        </section>
        <section className={styles.portfolio} id="portfolio">
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
        </section>
        <section className={styles.blog}>
          <div className={styles.container}>
            <h3>Blog</h3>
          </div>
          <div className={styles.container}>
            <PostContainer title={lastPost.title} id={lastPost.id} description={lastPost.description} date={lastPost.date} />
          </div>
        </section>
      </Layout>
    </div>
  )
}

export async function getStaticProps () {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
