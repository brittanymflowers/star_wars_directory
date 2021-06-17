/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import axios from 'axios'

function Species({ selected }) {
    const [species, setSpecies] = useState([])

    const thisSpecies = async () => {
        axios(selected.species.toString()).then(({ data }) => {
            let stuff = data.name;
            setSpecies(stuff)
        })
    };
    useEffect(() => {
        thisSpecies();
    }, [])

    if (!species) {
        return (
            "Human"
        )
    } else return (
        <span>
           {species}
        </span>
    )
}

export default Species
