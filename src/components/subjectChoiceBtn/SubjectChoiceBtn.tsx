import { NavLink } from 'react-router-dom'
import { Subject } from '../../types/Types'

interface Props {
    subjectData: Subject
}

function handleSubjectBtnClick() {

}

function SubjectChoiceBtn({subjectData} : Props) {
  return (
    <NavLink to="/question">
      <button>
          <img src={subjectData.img} />
          {subjectData.name}
      </button>
    </NavLink>
  )
}

export {SubjectChoiceBtn, handleSubjectBtnClick}