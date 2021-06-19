import {useState, useEffect} from 'react'
import Header from './Header'
import Search from './Search'
import Results from './CharacterList'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import PageCounter from './PageCounter'
import Popup from './Popup/Popup'
import axios from 'axios'

function App() {

  // The majority of the app's state is stored here and passed into each component as required

  const [searched, setSearched] = useState('')
  const [results, setResults] = useState([])
  const [numResults, setNumResults] = useState(0)
  const [selected, setSelected] = useState({})
  const [page, setPage] = useState(1)
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')

  // listCharacters provides the initial list of all Star Wars characters in the Star Wars API database.
  // The results are given at 10 characters to a page, then I've added "PrevButton" and "NextButton" to move through the pages to see all characters.

  const listCharacters = async () => {
    axios('https://swapi.dev/api/people/').then(({ data }) => {
      let results = data.results
      let numResults = data.count
      let next = data.next
      let prev = data.previous
      setResults(results)
      setNumResults(numResults)
      setNext(next)
      setPrev(prev)
    })
  }
  useEffect(() => {
      listCharacters()
  }, [])
  
  return (
    <div className='container'>
      <Header />
      <Search setSearched={setSearched} setResults={setResults} setNumResults={setNumResults} setNext={setNext} setPrev={setPrev} searched={searched} setPage={setPage}/>
      <Results results={results} setSelected={setSelected} selected={selected} />
      <div className='row'>
        <PrevButton prev={prev} setResults={setResults} setNext={setNext} setPrev={setPrev} setPage={setPage} listCharacters={listCharacters} />
        <NextButton next={next} setResults={setResults} setNext={setNext} setPrev={setPrev} setPage={setPage} listCharacters={listCharacters} />
      </div>
      <PageCounter numResults={numResults} page={page} />
      <a className='row' href='/'>Return to Full List</a>
      <Popup selected={selected} setSelected={setSelected}/>
    </div>
  )
}

export default App