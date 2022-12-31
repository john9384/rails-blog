import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AppRoutes } from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
