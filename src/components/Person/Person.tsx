import { PersonType } from '../../types';
import { Card } from 'reactstrap';
import InfoModal from '../InfoModal'

interface PersonProps {
  person: PersonType
}

function Person({ person }: PersonProps) {
  function handleClick() {
    return (
      alert('hi')
      // <InfoModal />
    )
  }
  return (
    <Card body onClick={handleClick}>
      <h3 className="person">{person.name}</h3>
    </Card>
  )
}

export default Person
