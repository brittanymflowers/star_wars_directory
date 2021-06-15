import React from 'react';
import { Card } from 'reactstrap'

function Result({ result, openPopup }) {

    // function moreInfo() {
    //     console.log(`Here is some more info about ${result.name} who was in these films ${result.films} and is this species ${result.species}`);
    // }

    return (
        <div>
            <Card body key={result.name} onClick={() => openPopup(result.url)}>
                <h3 className="person">{result.name}</h3>
            </Card>
        </div>
    )
}

export default Result