import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './styles.css'
import Movie from "./pages/Movie"
import Show from "./pages/Show"




const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tv/:id" element={<Show />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App