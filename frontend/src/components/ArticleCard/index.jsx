import styles from "./ArticleCard.module.css"

export const ArticleCard = ({ id, title, author_name, img_url, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.title}>{title} Hello</span>
        <span className={styles.subTitle}>{author_name}</span>
        <img src={img_url} alt="img" className={styles.img} />
      </div>
      <div className={styles.cardBottom}>
        <p className={styles.content}>
          {content.substring(0, 200)}
          {content.length > 200 && "..."}
        </p>
        <button className={styles.cta}>View</button>
      </div>
    </div>
  )
}
