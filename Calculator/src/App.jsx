import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='screen'>
        Screen
      </div>
      <div className='keyboard'>
        <div className='numbers'>
          <div className='first row'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div className='second row'>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <div className='third row'>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div className='third row'>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
