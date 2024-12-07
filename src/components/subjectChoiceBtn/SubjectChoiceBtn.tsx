import { Subject } from '../../types/Types'

interface Props {
    subjectData: Subject
}

export default function SubjectChoiceBtn({subjectData} : Props) {
  return (
    <button>
        {subjectData.name}
    </button>
  )
}
