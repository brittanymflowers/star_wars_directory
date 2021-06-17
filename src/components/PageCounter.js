import React from 'react'

function PageCounter({ numResults, page }) {

    const totalPages = Math.ceil(numResults/10)


    return (
        <div>
            <p>Total Results: {numResults} </p>
            <p>Page: {page} of {totalPages}</p>
        </div>
    )
}

export default PageCounter
