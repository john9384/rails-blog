import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import styles from "./Article.module.css"

export const Article = () => {
  const { articleId } = useParams()
  const {
    isLoading,
    error,
    data: article,
  } = useQuery("data", () =>
    fetch(`http://localhost:3000/articles/${articleId}`).then((res) =>
      res.json()
    )
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgDiv}>
          <img src={article.img_url} alt="img" className={styles.img} />
        </div>
        <div className={styles.headerInfo}>
          <h1 className={styles.title}>{article.title}</h1>
          <span className={styles.subTitle}>{article.author_name}</span>
        </div>
      </header>
      <div className={styles.content}>{article.content}</div>
    </>
  )
}
