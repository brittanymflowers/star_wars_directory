import {useState, useEffect} from 'react'
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Popup from './Popup';
import axios from 'axios';

function App() {
  const [searched, setSearched] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState({})

  const search = (e) => {
    if (e.key === "Enter") {
      axios('https://swapi.dev/api/people/?search=' + searched).then(({ data }) => {
        let results = data.results;
        setResults(results)
      });
    }
  }

  const listResults = async () => {
    axios("https://swapi.dev/api/people/").then(({ data }) => {
      const results = data.results;
      setResults(results)
    })
  };
  useEffect(() => {
      listResults();
  }, []);
  
  const handleInput = (e) => {
    let searched = e.target.value;
    setSearched(searched)
  }

  const openPopup = url => {
    axios(url).then(({ data }) => {
      let singleResult = data;
      setSelected(singleResult)
    });
  }

  const closePopup = () => {
    setSelected({})
  }

  console.log(selected)
  console.log(selected.films)
  console.log(selected.species)


  return (
    <div>
      <Header />
      <Search handleInput={handleInput} search={search} />
      <Results results={results} openPopup={openPopup}/>
      <Popup selected={selected} closePopup={closePopup}/>
    </div>
  );
}

export default App;