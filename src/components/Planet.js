import { useState, useEffect } from 'react'
import axios from 'axios'

function Planet({ selected }) {
    const [planet, setPlanet] = useState('')

    const thisSpecies = () => {
        axios(selected.homeworld).then(({ data }) => {
            let stuff = data.name;
            setPlanet(stuff)
        })
    };
    useEffect(() => {
        thisSpecies();
    }, [])

return (
        <span>
            {planet}
        </span>
    )
}

export default Planet
