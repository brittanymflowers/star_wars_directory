import Species from './Species'
import Films from './Films'
import Planet from './Planet'
import * as R from 'ramda'

function Popup({ selected, setSelected }) {

    const closePopup = () => {
        setSelected({})
    }
    // I only want a popup to appear if a character has been selected, so I wrote the "if" statement below.
    // Finney introduced me to ramda a while back, and it just makes the syntax simple to understand.
    // I included the required Name, Species, and Film Appearances, along with a few other details to fill it out.
    
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