import { Card } from 'reactstrap'

// The Character component creates the actual card representing each character in the list of results (whether searched or default).

function Character({ result, openPopup }) {
    return (
        <div>
            <Card body key={result.name} onClick={() => openPopup(result.url)}>
                <h3>{result.name}</h3>
            </Card>
        </div>
    )
}

export default Character