import { ArticleCard } from "../../../../components/ArticleCard"
import styles from "./Feed.module.css"
// import { useQuery } from "react-query"
import { useStore } from "../../../AppContext"

export const Feed = () => {
  const store = useStore()
  const { isLoading, error, data: articleList } = store.articles

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error.message
  return (
    <>
      <h1 className={styles.headText}>Latest Articles</h1>
      <div className={styles.list}>
        {articleList.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            author_name={article.author_name}
            img_url={article.img_url}
            content={article.content}
          />
        ))}
      </div>
    </>
  )
}
