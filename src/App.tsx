import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/Inicio"
import Main from "./pages/Main"
import Login from "./pages/Login"
import NotFound from "./components/NotFound"

const App = () => {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path='/login' element={<Login/>} />
            <Route path="/main" element={<Main/>} />


            {/* Ruta para el componente NotFound */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>  
    )
}

export default App