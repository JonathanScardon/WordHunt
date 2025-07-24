import './App.css'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home.jsx"
import Solve from "./pages/Solve/Solve.jsx"
import Play from "./pages/Play/Play.jsx"
import Results from "./pages/Results/Results.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/solve" element = {<Solve />}></Route>
        <Route path = "/play" element = { <Play /> }></Route>
        <Route path = "/results" element = { <Results /> }></Route>
      </Routes>
    </Router>
  )
  
}

export default App
