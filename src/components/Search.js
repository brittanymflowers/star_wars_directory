import axios from 'axios'

function Search({ setSearched, setResults, setNumResults, setNext, setPrev, searched, setPage }) {
    
    const search = (e) => {
        if (e.key === 'Enter') {
            axios('https://swapi.dev/api/people/?search=' + searched).then(({ data }) => {
                let results = data.results;
                let numResults = data.count;
                let next = data.next;
                let prev = data.previous;
                setSearched(searched)
                setResults(results)
                setNumResults(numResults)
                setNext(next)
                setPrev(prev)
            });
        }
    }

    const handleInput = (e) => {
        let searched = e.target.value;
        setSearched(searched)
        setNumResults(0)
        setNext('')
        setPrev('')
        setPage(1)
    }

    return (
        <div>
            <input
                type='text'
                placeholder='Search by Name...'
                className='searchbox'
                onChange={handleInput}
                onKeyPress={search}
            />
        </div>
    )
}

export default Search
