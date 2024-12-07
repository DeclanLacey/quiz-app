import { Subject } from '../../types/Types'

interface Props {
    subjectData: Subject
}

function handleSubjectBtnClick() {

}

function SubjectChoiceBtn({subjectData} : Props) {
  return (
    <a>
      <button>
          {subjectData.name}
      </button>
    </a>
    
  )
}

export {SubjectChoiceBtn, handleSubjectBtnClick}