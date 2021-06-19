/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import axios from 'axios'

// This component makes an API call to the "species" URL for the selected character object and returns the character's species.

function Species({ selected }) {
    const [species, setSpecies] = useState([])

    const thisSpecies = async () => {
        axios(selected.species.toString()).then(({ data }) => {
            let stuff = data.name;
            setSpecies(stuff)
        })
    };
    useEffect(() => {
        thisSpecies()
    }, [])

// I noticed that for human characters, the "species" URL was left empty, so I wrote this if/else statement to return "Human" if the array was empty.
    
    if (!species) {
        return (
            'Human'
        )
    } else return (
        <span>
           {species}
        </span>
    )
}

export default Species
