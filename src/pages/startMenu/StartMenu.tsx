import quizData from "../../data/data.json"
import {SubjectChoiceBtn} from '../../components/subjectChoiceBtn/SubjectChoiceBtn'
import { Quiz } from '../../types/Types'

function renderSubjectBtns(data : Quiz[]) {
  const subjectBtnElements = data.map((subjectQuiz, index) => {
    return <SubjectChoiceBtn key={index} quizData={subjectQuiz} />
  })

  return subjectBtnElements
}

function StartMenu() {

  return (
    <div>
      <h1>Welcome to the Frontend Quiz!</h1>
      <h2>Pick a subject to get started.</h2>
      <div>
        {renderSubjectBtns(quizData)}
      </div>
    </div>
  )
}

export {StartMenu, renderSubjectBtns}