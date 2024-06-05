
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Quick from './Components/Quick/Quick'
import { Complex } from './Components/Complex/Complex'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Quick' element={<Quick />} />
        <Route path='Complex' element={<Complex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
