import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as styles from "./App.module.css"
import { getAllFlags } from './Services';


function App() {
  const [flagsArrShuffled, setFlagsArrShuffled] = useState([]);
  const [choices, setChoices] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [loaded, setLoaded] = useState(false);
  const correctAsnwers = useRef(0);
  const totalAnswers = useRef(0);


  useEffect(() => {
    const getFlags = async () => {
      const flags = await getAllFlags();
      const shuffling = flags.sort(() => Math.random() - 0.5);
      const choices = [...shuffling];
      setChoices(choices);
      totalAnswers.current = flags.length;

      const currentFlg = shuffling.splice(0, 1)[0];
      setFlagsArrShuffled(shuffling);
      setCurrentFlag(currentFlg);
      setLoaded(true);
    }
    getFlags();
  }, [])

  const fourChoices = [];
  fourChoices.push(currentFlag);
  const choicesWithoutCurrent = choices.filter((flagObj) => {
    return flagObj?.name !== currentFlag?.name;
  })
  const choicesWithoutCurrentShuffled = choicesWithoutCurrent.sort(() => Math.random() - 0.5);
  const threeLeft = choicesWithoutCurrentShuffled.slice(0, 3);
  fourChoices.push(...threeLeft);
  const fourChoicesShuffled = fourChoices.sort(() => Math.random() - 0.5);

  const choiceClickFunction = (name) => {
    if (name === currentFlag.name) {
      correctAsnwers.current++;
    }
    debugger;
    const newCurFlag = flagsArrShuffled.splice(0, 1)[0];
    setCurrentFlag(newCurFlag);
  }
  return (
    <div className={styles.container}>
      <div> {correctAsnwers.current}/{totalAnswers.current}</div>
      {loaded && currentFlag &&
        <>
          <div className={styles.flagContainer}> <img className={styles.flagImg} src={currentFlag.flagURL} alt="" /></div>
          <div className={styles.Options}>
            {fourChoicesShuffled.map((oneOption => {
              return <button key={oneOption._id} onClick={() => choiceClickFunction(oneOption.name)}> {oneOption.name}</button>
            }))}

          </div>
        </>
      }
      {!currentFlag && !correctAsnwers.current === totalAnswers.current &&
        <div>Your score is {correctAsnwers.current} out of {totalAnswers.current}</div>
      }
      {!currentFlag && correctAsnwers.current === totalAnswers.current &&
        <div>Perfect score</div>
      }
    </div>
  )
}

export default App
