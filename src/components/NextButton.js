/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import axios from 'axios'

// I created Next and Prev buttons to navigate through pages of results.
// The next button will turn grey and become unresponsive if there is not a next page available.

function NextButton({ next, setResults, setNext, setPrev, setPage, listCharacters }) {

    const goToNext = () => {
        window.scrollTo(0, 0)
        axios(next).then(({ data }) => {
            let results = data.results;
            let next = data.next;
            let prev = data.previous;
            setResults(results)
            setNext(next)
            setPrev(prev)
            setPage(current => ++current)
        })
    }
    useEffect(() => {
        listCharacters()
    }, [])

    if (!next) {
        return (
            <button className='shadyButton col'>Next Page</button>
        )
    } else return (
        <button id='blueLight' className='pageButton col' onClick={goToNext}>Next Page</button>
    )
}

export default NextButton
