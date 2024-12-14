import { NavLink } from 'react-router-dom'
import { Quiz } from '../../types/Types'

interface Props {
  quizData: Quiz
}

function handleSubjectBtnClick() {

}

function SubjectChoiceBtn({quizData} : Props) {
  return (
    <NavLink to="/question" state={quizData.title}>
      <button>
          <img src={quizData.icon} />
          {quizData.title}
      </button>
    </NavLink>
  )
}

export {SubjectChoiceBtn, handleSubjectBtnClick}