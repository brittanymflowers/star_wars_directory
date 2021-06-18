import {useState, useEffect} from 'react'
import Header from './Header'
import Search from './Search'
import Results from './Results'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import PageCounter from './PageCounter'
import Popup from './Popup'
import axios from 'axios'

function App() {
  const [searched, setSearched] = useState('')
  const [results, setResults] = useState([])
  const [numResults, setNumResults] = useState(0)
  const [selected, setSelected] = useState({})
  const [page, setPage] = useState(1)
  const [next, setNext] = useState('')
  const [prev, setPrev] = useState('')

  const listResults = async () => {
    axios('https://swapi.dev/api/people/').then(({ data }) => {
      let results = data.results;
      let numResults = data.count;
      let next = data.next;
      let prev = data.previous;
      setResults(results)
      setNumResults(numResults)
      setNext(next)
      setPrev(prev)
    })
  };
  useEffect(() => {
      listResults();
  }, []);
  
  // console.log(searched)
  // console.log(results)
  // console.log(numResults)
  // console.log(selected)
  // console.log(page)
  // console.log(next)
  // console.log(prev)

  return (
    <div className='container'>
      <Header />
      <Search setSearched={setSearched} setResults={setResults} setNumResults={setNumResults} setNext={setNext} setPrev={setPrev} searched={searched} />
      <Results results={results} setSelected={setSelected} selected={selected} />
      <div className='row'>
        <PrevButton prev={prev} setResults={setResults} setNext={setNext} setPrev={setPrev} setPage={setPage} listResults={listResults} />
        <NextButton next={next} setResults={setResults} setNext={setNext} setPrev={setPrev} setPage={setPage} listResults={listResults}/>
      </div>
      <PageCounter numResults={numResults} page={page} />
      <div className='row'>
        <a className='row' href='/'>Return to Full List</a>
      </div>
      <Popup selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;