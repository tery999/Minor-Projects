import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getAllFlags } from './Services';


function App() {
  const [flagsArr, setFlagsArr] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentFlag, setCurrentFlag] = useState();

  useEffect( () => {
    const getFlags = async () => {
      debugger;
      const flags = await getAllFlags();
      const randomIndex = Math.floor(Math.random() * flags.length);
      const getOneFlag = flags[randomIndex];
      flags.splice(randomIndex, 1)
      setCurrentFlag(getOneFlag);
      setFlagsArr(flags);
      setLoaded(true);
    }
    getFlags();
  }, [])


  return (
    <div className='Container'>
      {loaded && currentFlag &&
        <div className='flagContainer'> {currentFlag.name}</div>
      }
    </div>
  )
}

export default App
