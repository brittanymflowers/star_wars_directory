import React from 'react'

function NextButton({ goToNext, next }) {
    if (!next) {
        return (
            <section>
                <button className="shadyButton">Next Page</button>
            </section>
        )
    } else return (
        <section>
            <button className="pageButton" onClick={goToNext}>Next Page</button>
        </section>
    )
}

export default NextButton
