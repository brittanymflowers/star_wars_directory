import {useState, useEffect} from 'react'
import Header from './Header';
import Search from './Search';
import Results from './Results';
import Popup from './Popup';
import axios from 'axios';
import * as R from 'ramda';

function App() {
  const [state, setState] = useState({
    searched: '',
    results: [],
    selected: {},
  })

  const search = (e) => {
    if (e.key === "Enter") {
      axios('https://swapi.dev/api/people/?search=' + state.searched).then(({ data }) => {
        let results = data.results;

        console.log(results);

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const results = async () => {
    axios("https://swapi.dev/api/people/").then(({ data }) => {
      const results = data.results;
      setState(prevState => {
        return { ...prevState, results: results }
      });
    })
  };
  useEffect(() => {
      results();
    }, []);

  const handleInput = (e) => {
    let searched = e.target.value;
    setState(prevState => {
      return { ...prevState, searched: searched }
    });
  }

  const openPopup = url => {
    axios(url).then(({ data }) => {
      let singleResult = data;
      console.log(singleResult);
      setState(prevState => {
        return { ...prevState, selected: singleResult }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div>
      <Header />
      <Search handleInput={handleInput} search={search} />
      {/* {R.isEmpty(state.searched) ? null : <Results results={state.results} openPopup={openPopup}/>} */}
      <Results results={state.results} openPopup={openPopup}/>
      <Popup selected={state.selected} closePopup={closePopup}/>
    </div>
  );
}

export default App;