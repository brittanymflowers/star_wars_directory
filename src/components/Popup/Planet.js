/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

// This component makes an API call to the "homeworld" URL for the selected character object and returns the character's home planet.

function Planet({ selected }) {
    const [planet, setPlanet] = useState('')

    const thisPlanet = async () => {
        axios(selected.homeworld).then(({ data }) => {
            let stuff = data.name;
            setPlanet(stuff)
        })
    }
    useEffect(() => {
        thisPlanet()
    }, [])

return (
        <span>
            {planet}
        </span>
    )
}

export default Planet
