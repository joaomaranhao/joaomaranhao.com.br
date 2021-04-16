import styles from './Card.module.css'
import { FaLink } from 'react-icons/fa'

const Card = ({ title, text, url, imgSrc, repo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <a href={url}>
          <img src={imgSrc} alt={title} />
          <p>Visite o site!</p>
        </a>
      </div>
      <div className={styles.text}>
        <FaLink color="#FF7E44" size="2em" />
        <h4>{title}</h4>
        <p>{text}</p>
        <a href={repo}>
          Veja o repositório
        </a>
      </div>
    </div>
  )
}

export default Card
