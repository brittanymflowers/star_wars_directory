import React, { useEffect } from 'react'
import * as R from 'ramda';
import axios from 'axios';


function Popup({ selected, closePopup }) {


    if (R.isNil(selected) || R.isEmpty(selected)) return null;
    return (
        <section className="popup">
            <div className="content">
                <h2>Name: {selected.name}</h2>
                <p className="rating">Films: {selected.films}</p>
                <p>Species: { selected.species }</p>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}


export default Popup