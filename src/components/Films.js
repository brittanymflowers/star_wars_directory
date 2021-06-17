import { useState, useEffect } from 'react'
import axios from 'axios'

function Films({ selected }) {
    const [films, setFilms] = useState([])

    function getTitles() {
        selected.films.forEach(movie => {
            axios(movie.toString()).then(({ data }) => {
                let stuff = data.title
                setFilms(current => current + stuff + ' | ')
            })
        })
    }
    useEffect(() => {
        getTitles();
    }, [])

    return (
        <span>
            {films}
        </span>
    )
}

export default Films
