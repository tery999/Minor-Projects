
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Quick from './Quick/Quick'

function App() {


  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Quick' element={<Quick/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
