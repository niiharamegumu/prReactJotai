import { FC } from 'react'
import { useAtom } from 'jotai'
import { countAtom, upperNameAtom } from './state/Atoms'

import './App.css'
import Count from './Count'

const App: FC = () => {
  const [count, updateCount] = useAtom(countAtom)
  const [name] = useAtom(upperNameAtom)

  const handleMinus = () => updateCount((preV) => preV - 1)
  const handlePlus = () => updateCount((preV) => preV + 1)

  return (
    <>
      <h1>親：{count}</h1>
      <p>{name}</p>
      <Count />
      <div className="buttons">
        <button type="button" onClick={handlePlus}>
          one up
        </button>
        <button type="button" onClick={handleMinus}>
          one down
        </button>
      </div>
    </>
  )
}

export default App
