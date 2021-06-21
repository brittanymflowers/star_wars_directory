import axios from 'axios'

function Search({ setSearched, setResults, setNumResults, setNext, setPrev, searched, setPage }) {
    
// Search function - you can search characters by name.
// Type in part or all of name, then press enter to send request.
    
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

// I created a separate search function here when I added a button option for submitting the search.
// At first I only had "press enter" as an option to submit search, but that made mobile use weird.
    
    const searchByButton = () => {
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

    const handleInput = (e) => {
        let searched = e.target.value
        setSearched(searched)
        setNext('')
        setPrev('')
        setPage(1)
    }

    return (
        <div>
            <input
                data-testid='searchInput'
                type='text'
                placeholder='Search by Name...'
                className='searchbox'
                onChange={handleInput}
                onKeyPress={search}
            />
            <i
                className='fa fa-arrow-right fa-2x submitButton'
                onChange={handleInput}
                onClick={searchByButton}
            />
        </div>
    )
}

export default Search