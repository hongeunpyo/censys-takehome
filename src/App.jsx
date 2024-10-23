import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MainPage } from './views/main'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage />
    </QueryClientProvider>
  )
}

export default App
