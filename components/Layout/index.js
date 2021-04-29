import Footer from '../Footer'
import Navbar from '../Navbar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
