import Link from 'next/link'
import styles from './PostContainer.module.css'

export default function PostContainer ({ title, id, description, date }) {
  const dateArray = date.split('-')
  const month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  return (
    <div className={styles.postContainer}>
      <Link href={`/posts/${id}`}>
        <a>
          <span>{`${dateArray[2]} de ${month[dateArray[1] * 1 - 1]} de ${dateArray[0]}`}</span>
          <h4>{title}</h4>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  )
}
