/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

function Planet({ selected }) {
    const [planet, setPlanet] = useState('')

    const thisPlanet = () => {
        axios(selected.homeworld).then(({ data }) => {
            let stuff = data.name;
            setPlanet(stuff)
        })
    };
    useEffect(() => {
        thisPlanet();
    }, [])

return (
        <span>
            {planet}
        </span>
    )
}

export default Planet
