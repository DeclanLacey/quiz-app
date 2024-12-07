import SubjectsData from "../../data/subjects.json"
import SubjectChoiceBtn from '../../components/subjectChoiceBtn/SubjectChoiceBtn'
import { Subject } from '../../types/Types'

function renderSubjectBtns(data : Subject[]) {
  const subjectBtnElements = data.map((subject) => {
    return <SubjectChoiceBtn subjectData={subject} />
  })

  return subjectBtnElements
}

function StartMenu() {


  return (
    <div>
      <h1>Welcome to the Frontend Quiz!</h1>
      <h2>Pick a subject to get started.</h2>
      <div>
        {renderSubjectBtns(SubjectsData)}
      </div>
    </div>
  )
}

export {StartMenu, renderSubjectBtns}