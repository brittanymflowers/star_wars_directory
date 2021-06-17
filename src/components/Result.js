import React from 'react';
import { Card } from 'reactstrap'

function Result({ result, openPopup }) {

    return (
        <div>
            <Card body key={result.name} onClick={() => openPopup(result.url)}>
                <h3 className="person">{result.name}</h3>
            </Card>
        </div>
    )
}

export default Result