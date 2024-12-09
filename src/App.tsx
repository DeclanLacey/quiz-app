import './App.css'
import { Route, Routes } from 'react-router-dom'
import { StartMenu } from './pages/startMenu/StartMenu'
import { Question } from './pages/question/Question'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<StartMenu />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </div>
  )
}

export default App
