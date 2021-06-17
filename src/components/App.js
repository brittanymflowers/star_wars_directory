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

  const search = (e) => {
    if (e.key === "Enter") {
      axios('https://swapi.dev/api/people/?search=' + searched).then(({ data }) => {
        let results = data.results;
        let numResults = data.count;
        let next = data.next;
        let prev = data.previous;
        setResults(results)
        setNumResults(numResults)
        setNext(next)
        setPrev(prev)
      });
    }
  }

  const listResults = async () => {
    axios("https://swapi.dev/api/people/").then(({ data }) => {
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

  const goToNext = () => {
    axios(next).then(({ data }) => {
      let results = data.results;
      let next = data.next;
      let prev = data.previous;
      setResults(results)
      setNext(next)
      setPrev(prev)
      setPage(current => ++current)
    })
  };
  useEffect(() => {
    listResults();
  }, []);

  const goToPrev = () => {
    axios(prev).then(({ data }) => {
      let results = data.results;
      let next = data.next
      let prev = data.previous;
      setResults(results)
      setNext(next)
      setPrev(prev)
      setPage(current => --current)
    })
  };
  useEffect(() => {
    listResults();
  }, []);
  
  const handleInput = (e) => {
    let searched = e.target.value;
    setSearched(searched)
    setNumResults(0)
    setNext('')
    setPrev('')
  }

  const openPopup = url => {
    axios(url).then(({ data }) => {
      let selected = data;
      setSelected(selected)
    });
  }

  const closePopup = () => {
    setSelected({})
  }

  console.log(searched)
  console.log(results)
  console.log(numResults)
  console.log(selected)
  console.log(page)
  console.log(next)
  console.log(prev)

  return (
    <div>
      <Header />
      <Search handleInput={handleInput} search={search} />
      <Results results={results} openPopup={openPopup} />
      <div>
        <PrevButton goToPrev={goToPrev} prev={prev} />
        <NextButton goToNext={goToNext} next={next} />
      </div>
      <PageCounter numResults={numResults} page={page}/>
      <Popup selected={selected} closePopup={closePopup}/>
    </div>
  );
}

export default App;