import { useAtom } from 'jotai'
import { countAtom } from './state/Atoms'

const Count = () => {
  const [count, updateCount] = useAtom(countAtom)

  const handle = () => updateCount((preV) => preV + 1)

  return (
    <div>
      <p>子供：{count}</p>
      <button type="button" onClick={handle}>
        子供プラス
      </button>
    </div>
  )
}

export default Count
