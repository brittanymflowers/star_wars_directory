/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import axios from 'axios'

function PrevButton({ prev, setResults, setNext, setPrev, setPage, listResults }) {

    const goToPrev = () => {
        axios(prev).then(({ data }) => {
            let results = data.results;
            let next = data.next
            let prev = data.previous;
            setResults(results)
            setNext(next)
            setPrev(prev)
            setPage(current => --current)
        })
    };
    useEffect(() => {
        listResults();
    }, []);
    
    if (!prev) {
        return (
            // <div className="col-md-4">
            <button className='shadyButton col-md-4'>Prev Page</button>
            // </div>
        )
    } else return (
        // <div className="col-md-4">
        <button id="redLight" className='pageButton col-md-4' onClick={goToPrev}>Prev Page</button>
        // </div>
    )
}

export default PrevButton
