import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import { QueryClient, QueryClientProvider } from 'react-query'
import Details from "./pages/Details"




const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  </QueryClientProvider>
  )
}

export default App