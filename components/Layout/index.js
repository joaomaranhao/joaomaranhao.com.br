import Navbar from '../Navbar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {children}
      </main>
    </>
  )
}

export default Layout
