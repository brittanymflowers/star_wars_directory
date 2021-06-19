function PageCounter({ numResults, page }) {

// PageCounter lets you know which page you're on and the total # of pages for your results.
// I surprisingly had a LOT of random issues to fix once I implemented this.
// It required a lot of resetting the state during different functions, etc.

    const totalPages = Math.ceil(numResults/10)

    if (numResults === 0) {
        return (
            <div className='row'>
                Page: 0 of {totalPages} <br /> Total Results: {numResults + '  '}
            </div>
        )
    } else return (
        <div className='row'>
            Page: {page} of {totalPages} <br/> Total Results: {numResults + '  '}
        </div>
    )
}

export default PageCounter
