import './App.css'
import { Route, Routes } from 'react-router-dom'
import { StartMenu } from './pages/startMenu/StartMenu'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<StartMenu />} />
      </Routes>
    </div>
  )
}

export default App
