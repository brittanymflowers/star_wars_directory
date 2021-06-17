import Species from './Species'
import Films from './Films'
import Homeworld from './Homeworld'
import * as R from 'ramda';

function Popup({ selected, closePopup }) {
    if (R.isNil(selected) || R.isEmpty(selected)) return null;
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.name}</h2>
                <p>Films: <Films selected={selected}/></p>
                <p>Species: <Species selected={selected} /></p>
                <p>Homeworld: <Homeworld selected={selected} /></p>
                <p>Height: {selected.height} cm</p>
                <p>Hair Color: {selected.hair_color}</p>
                <p>Eye Color: {selected.eye_color}</p>
                <p>Gender: {selected.gender}</p>

                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup