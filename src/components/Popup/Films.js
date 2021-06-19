/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

// This component makes an API call to each of the URLs in the "films" array in the selected character object and returns each title, separated by a "|".

function Films({ selected }) {
    const [films, setFilms] = useState([])

    function getTitles() {
        setFilms([])
        selected.films.forEach(movie => {
            axios(movie.toString()).then(({ data }) => {
                let film = data.title
                setFilms(current => current + film + ' | ')
            })
        })
    }
    useEffect(() => {
        getTitles()
    }, [])

    return (
        <span>{films}</span>
    )
}

export default Films
