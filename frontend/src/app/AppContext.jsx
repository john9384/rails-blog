import React from "react"
import { useQuery } from "react-query"

const GlobalContext = React.createContext({})

export const StoreProvider = ({ children }) => {
  const articles = useFetchArticles()
  const store = {
    articles,
  }

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export const useStore = () => {
  const store = React.useContext(GlobalContext)
  return store
}

export const useFetchArticles = () => {
  const { isLoading, error, data } = useQuery("articles", () =>
    fetch(`http://localhost:3000/articles`).then((res) => res.json())
  )

  return { isLoading, error, data }
}
