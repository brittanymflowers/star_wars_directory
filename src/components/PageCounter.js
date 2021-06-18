function PageCounter({ numResults, page }) {

    const totalPages = Math.ceil(numResults/10)

    return (
        <div className='row'>
            Page: {page} of {totalPages} <br/> Total Results: {numResults + '  '}
        </div>
    )
}

export default PageCounter
