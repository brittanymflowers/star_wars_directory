import React from 'react';
import Result from './Result';

function Results({ results, openPopup }) {
    return (
        <div className="people">
            {results.map(result => (
                <Result key={result.name} result={result} openPopup={openPopup}/>
            ))}
        </div>
    )
}

export default Results;
