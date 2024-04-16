import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as styles from "./App.module.css"
import { getAllFlags } from './Services';


function App() {
  const [flagsArrShuffled, setFlagsArrShuffled] = useState([]);
  const [choices, setChoices] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [loaded, setLoaded] = useState(false);


  useEffect( () => {
    const getFlags = async () => {
      const flags = await getAllFlags();
      const shuffling = flags.sort(() => Math.random() - 0.5);
      const choices = [...shuffling];
      setChoices(choices);

      const currentFlg = shuffling.splice(0,1)[0];
      setFlagsArrShuffled(shuffling);
      setCurrentFlag(currentFlg);
      setLoaded(true);
    }
    getFlags();
  }, [])

  const fourChoices = [];
  fourChoices.push(currentFlag);
  const choicesWithoutCurrent = choices.filter( (flagObj)=> {
    return flagObj.name !== currentFlag.name;
  })
  const choicesWithoutCurrentShuffled = choicesWithoutCurrent.sort(() => Math.random() - 0.5);
  const threeLeft = choicesWithoutCurrentShuffled.slice(0,3);
  fourChoices.push(...threeLeft);
  const fourChoicesShuffled = fourChoices.sort(() => Math.random() - 0.5);

  console.log("THIS IS CURRENT FLAG", currentFlag)
  return (
    <div className={styles.container}>
      {loaded && currentFlag &&
        <div className='flagContainer'> <img src={currentFlag.flagURL} alt="" /></div>
      }
      {fourChoicesShuffled.map ((oneOption=> {
        return <div key={oneOption._id}> {oneOption.name}</div>
      })) }
    </div>
  )
}

export default App
