import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './components/PokeCard';
import Axios from 'axios';

function App() {

  const [poke,setPoke] = useState([]);

  useEffect(() => {
    console.log("hello");
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => setPoke(res.data.results))
      .catch(err => console.log(err))
  },[])


  // const getPokemon = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
  //   .then(res => res.json())
  //   .then(res => setPoke(res.results))
  //   .catch(err => console.log(err))
  // }

  return (
    <div className="App">
      <button className="btn btn-primary"
      onClick={useEffect}
      >Get Pokemon</button>
      <div className="d-flex flex-wrap p-5">
      {
        poke.map((p,i) => {
          return <PokeCard
                    poke={p}
                    key={i}
          />
        })
      }
      </div>
    </div>
  );
}

export default App;