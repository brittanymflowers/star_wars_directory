/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

function Films({ selected }) {
    const [films, setFilms] = useState([])

    function getTitles() {
        selected.films.forEach(movie => {
            axios(movie.toString()).then(({ data }) => {
                let film = data.title
                setFilms(current => current + film + " | ")
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
