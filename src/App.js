import './App.css';
import {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;  
  // const pokeApiTypes  = `https://pokeapi.co/api/v2/type/`; 

  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon]     = useState({sprites:{}});
  const [isLoading, setIsLoading] = useState(false);
  const [currentType, setCurrentType] = useState();


  const [doubleDamageFrom, setdoubleDamageFrom] = useState([]);
  const [halfDamageFrom, sethalfDamageFrom] = useState([]);
  const [weaknesses, setweaknesses] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);

        const types = pokemonData.types;
        setCurrentType(types.length);

        // mapear los tipos y hacer fetch a la ruta donde estan los damages y guardar en la const los double_damage_from/half_damage_from
        const doubleDamageResult = types.map(type => 
          fetch(type.type.url)
            .then(response => response.json())
            .then(pokemonDoubleDamage => pokemonDoubleDamage.damage_relations.double_damage_from)
        );

        const halfDamageResult = types.map(type => 
          fetch(type.type.url)
            .then(response => response.json())
            .then(pokemonHalfDamage => pokemonHalfDamage.damage_relations.half_damage_from)
        );

        // acumular los double damage/half damage y setearlos en el estado
        Promise.all(doubleDamageResult).then(damages => {
          const all_doubleDamageResult = damages.reduce((prev, current) => [...prev, ...current], []);
          setdoubleDamageFrom(all_doubleDamageResult);
        });
        

        Promise.all(halfDamageResult).then(damages2 => {
          const all_halfDamageResult = damages2.reduce((prev, current) => [...prev, ...current], []);
          sethalfDamageFrom(all_halfDamageResult);
        });


        const filteredDamage = doubleDamageFrom.filter((ddF) => {
          return !halfDamageFrom.some((hdF) => ddF.name == hdF.name);
        });

        setweaknesses(filteredDamage);
        setIsLoading(false);
    })
  }, [currentId]);

  const getPokemon = (id) => {
    setCurrentId(id);
  }

  return (
    <div className="App">
      <header className="App-header">
      {
        isLoading ? (<></>) : 
        (
          <div>
            {/* HeadContainer */}
            <div>
              <label>{pokemon.name}</label>
            </div>
            
            {/* ScreenContainer */}
            <div> 
              <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
            </div>

            {/* InfoContainer */}
            <div>
              <button onClick={() => getPokemon(currentId - 1)} disabled={currentId <= 1}>Before</button>
              <button onClick={() => getPokemon(currentId + 1)}>Next</button>
              <br/>
              <h1>Details</h1>
              
              <div>
                <h3>Weight</h3>
                <label>{pokemon.weight}</label>
              </div>
              
              <div>
                <h3>Abilities: </h3>
                {
                  pokemon.abilities.map(item => (
                    <div key={uuidv4()}>
                      <label>{item.ability.name}</label>
                    </div>
                  ))
                }
              </div>

              <div>
                <h3>Types: </h3>
                {
                  pokemon.types.map(item => (
                    <div key={uuidv4()}>
                      <label>{item.type.name}</label>
                    </div>
                  ))
                }
              </div>

              <div>
                <h3>Weakness: </h3>
                  <div>
                  {

                    currentType > 1 ? (
                      weaknesses.map(item => (
                        <div key={uuidv4()}>
                          <label>{item.name}</label>
                        </div>
                      ))
                    ) : (
                      doubleDamageFrom.map(item => (
                        <div key={uuidv4()}>
                          <label>{item.name}</label>
                        </div>
                      ))
                    )
                    
                  }
                  </div>
              </div>

            </div>
          </div>
        )
      }  
      <br /><br />
      </header>
    </div>
  );
}

export default App;





