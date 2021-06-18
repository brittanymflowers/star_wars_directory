import Species from './Species'
import Films from './Films'
import Planet from './Planet'
import * as R from 'ramda';

function Popup({ selected, setSelected }) {

    const closePopup = () => {
        setSelected({})
    }

    if (R.isNil(selected) || R.isEmpty(selected)) return null;
    return (
        <section className='popup'>
            <div className='content'>
                <h1>{selected.name}</h1>
                <p><b>Number of Film Appearances:</b> {selected.films.length}</p>
                <p><b>Film Titles:</b> <Films selected={selected}/></p>
                <p><b>Species:</b> <Species selected={selected}/></p>
                <p><b>Home Planet:</b> <Planet selected={selected}/></p>
                <p><b>Height:</b> {selected.height} cm</p>
                <p><b>Hair Color:</b> {selected.hair_color}</p>
                <p><b>Eye Color:</b> {selected.eye_color}</p>
                <p><b>Gender:</b> {selected.gender}</p>
                <button className='pageButton' onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup