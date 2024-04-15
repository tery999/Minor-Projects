import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getAllFlags } from './Services';


function App() {
  const [flagsArr, setFlagsArr] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect( () => {
    getAllFlags().then(results => setFlagsArr(results));
    setLoaded(true);
  }, [])
  return (
    <div className='Container'>
      {loaded === true &&
        <>
          {
            flagsArr.map((flag) => {
              return <div key={flag._id}>
                {flag.name}
              </div>
            })
          }
        </>
      }
    </div>
  )
}

export default App
