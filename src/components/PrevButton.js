import React from 'react'

function PrevButton({ goToPrev, prev }) {
    if (!prev) {
        return (
            <section>
                <button className="shadyButton">Prev Page</button>
            </section>
        )
    } else return (
        <section>
            <button className="pageButton" onClick={goToPrev}>Prev Page</button>
        </section>
    )
}

export default PrevButton
