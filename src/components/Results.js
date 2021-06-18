import React from 'react';
import Result from './Result';
import axios from 'axios'

function Results({ results, setSelected }) {

    const openPopup = url => {
        axios(url).then(({ data }) => {
            let selected = data;
            setSelected(selected)
        });
    }

    return (
        <div className='people'>
            {results.map(result => (
                <Result key={result.name} result={result} openPopup={openPopup}/>
            ))}
        </div>
    )
}

export default Results;