import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App