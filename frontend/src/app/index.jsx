import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"
import { QueryClient, QueryClientProvider } from "react-query"
import { StoreProvider } from "./AppContext"

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <AppRoutes />
        </StoreProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default App
