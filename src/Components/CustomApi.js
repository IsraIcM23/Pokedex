import '../App.css';
import {useState} from 'react';

function useCustomApi() {

  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;  

  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon]     = useState({sprites:{}});
  const [isLoading, setIsLoading] = useState(false);
  const [currentType, setCurrentType] = useState();

  const [doubleDamageFrom, setdoubleDamageFrom] = useState([]);
  const [halfDamageFrom, sethalfDamageFrom] = useState([]);
  const [weaknesses, setweaknesses] = useState([]);

  const getPokemon = (id) => {
    setCurrentId(id);
  }

  return [pokeApiDomain, currentId, setCurrentId, pokemon, setPokemon, isLoading, setIsLoading, setCurrentType, doubleDamageFrom, setdoubleDamageFrom, halfDamageFrom, sethalfDamageFrom, weaknesses, setweaknesses, getPokemon];
}

export default useCustomApi;
