import { useLocation } from 'react-router-dom'

function Question() {
  const location = useLocation()
  const name = location.state

  return (
    <div>
      <p>{name}</p>
      <p>yes</p>
    </div>
  )
}

export {Question}
