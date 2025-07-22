import './App.css'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Solve from "./pages/Solve/Solve.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/solve" element = {<Solve />}></Route>
      </Routes>
    </Router>
  )
  
}

export default App
