/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react'
import axios from 'axios'

function NextButton({ next, setResults, setNext, setPrev, setPage, listResults }) {

    const goToNext = () => {
        axios(next).then(({ data }) => {
            let results = data.results;
            let next = data.next;
            let prev = data.previous;
            setResults(results)
            setNext(next)
            setPrev(prev)
            setPage(current => ++current)
        })
    };
    useEffect(() => {
        listResults();
    }, []);

    if (!next) {
        return (
            <button className='shadyButton col'>Next Page</button>
        )
    } else return (
        <button id="blueLight" className='pageButton col' onClick={goToNext}>Next Page</button>
    )
}

export default NextButton
