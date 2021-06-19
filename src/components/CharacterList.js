import Result from './Character'
import axios from 'axios'

// The CharacterList component maps out each individual character returned by the API for a search.
// (or as default, all 82 characters in the people list)

function CharacterList({ results, setSelected }) {

    const openPopup = url => {
        axios(url).then(({ data }) => {
            let selected = data;
            setSelected(selected)
        })
    }

    return (
        <div className='people'>
            {results.map(result => (
                <Result key={result.name} result={result} openPopup={openPopup}/>
            ))}
        </div>
    )
}

export default CharacterList