/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import axios from 'axios'

// I created Prev and Next buttons to navigate through pages of results.
// The prev button will turn grey and become unresponsive if there is not a prev page available.

function PrevButton({ prev, setResults, setNext, setPrev, setPage, listCharacters }) {

    const goToPrev = () => {
        window.scrollTo(0, 0)
        axios(prev).then(({ data }) => {
            let results = data.results;
            let next = data.next
            let prev = data.previous;
            setResults(results)
            setNext(next)
            setPrev(prev)
            setPage(current => --current)
        })
    }
    useEffect(() => {
        listCharacters()
    }, [])
    
    if (!prev) {
        return (
            <button className='shadyButton col'>Prev Page</button>
        )
    } else return (
        <button id='redLight' className='pageButton col' onClick={goToPrev}>Prev Page</button>
    )
}

export default PrevButton
