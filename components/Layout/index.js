import Head from 'next/head'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Teko:wght@500&display=swap" rel="stylesheet" />
    </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
