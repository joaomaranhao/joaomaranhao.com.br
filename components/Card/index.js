import Link from 'next/link'
import styles from './Card.module.css'

const Card = ({ url }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="/images/brazilian-vehicles-and-price-mobile.jpg" alt="Tabela Fipe"/>
      </div>
      <div className={styles.text}>
        <h4>Tabela Fipe</h4>
        <p>Serviço que mostra o preço da tabela fipe dos veículos</p>
        <Link href="/">
          <a>
            Veja os detalhes
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card
