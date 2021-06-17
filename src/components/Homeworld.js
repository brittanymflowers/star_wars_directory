import { useState, useEffect } from 'react'
import axios from 'axios'

function Homeworld({ selected }) {
    const [homeworld, setHomeworld] = useState('')

    const thisSpecies = () => {
        axios(selected.homeworld).then(({ data }) => {
            let stuff = data.name;
            setHomeworld(stuff)
        })
    };
    useEffect(() => {
        thisSpecies();
    }, [])

return (
        <span>
            {homeworld}
        </span>
    )
}

export default Homeworld
