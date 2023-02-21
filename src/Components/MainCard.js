import '../App.css';
import {useEffect, useState} from 'react';
import MediaCard from './CustomCard';
import { AppStats } from './Stats';
import useCustomApi from './CustomApi';

function MainCard() {
  
  const [pokeApiDomain, currentId, setCurrentId, pokemon, setPokemon, isLoading, setIsLoading, setCurrentType, doubleDamageFrom, setdoubleDamageFrom, halfDamageFrom, sethalfDamageFrom, weaknesses, setweaknesses, getPokemon] = useCustomApi();
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState([]);  


  
  useEffect(() => {

    setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        setStats(pokemonData.stats);

        var chartData = [];
        stats.forEach(item => { 
          chartData.push({label: item.stat.name, level: item.base_stat})
        })
        setChartData(chartData);
        

        // console.log(pokemonData);
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

        setTimeout(() => {
          setIsLoading(false);  
        }, 200);
        
    })
  }, [currentId]);


  return (
    <div className="App">
      
      <div className="App-header">
      
      {
        isLoading ? (<></>) : 
        (
          <div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '5px',
              boxShadow: '0 0 0 .2em black'
            }}>
              
              <div style={{marginRight: '-23px', zIndex:1, display: 'flex', height: '25px', marginTop: '100%'}}>
                <button onClick={() => getPokemon(currentId - 1)} disabled={currentId <= 1} > {"<"} </button>
              </div>
              <div>
                <MediaCard 
                  // pokemonImg={pokemon.sprites.other.dream_world.front_default}
                  pokemonImg={pokemon.sprites.front_default}
                  pokemonName={pokemon.name}
                  pokemonId={currentId}
                  pokemonLogo={pokemon.sprites.front_shiny}
                  pokemonAbilities={pokemon.abilities}
                  pokemonTypes={pokemon.types}
                  pokemonWeight={pokemon.weight}
                  pokemonHight={pokemon.height}
                  pokemonWeaknesses={weaknesses}
                  chartData={chartData}
                />
              </div>
              
              <div style={{marginLeft: '-23px', zIndex:1, display: 'flex', height: '25px',marginTop: '100%'}}>
                <button onClick={() => getPokemon(currentId + 1)} disabled={currentId >= 150}> {">"}  </button>
              </div>  

            </div>
          </div>
        )
      }  
      <br /><br />
      </div>
    </div>
  );
}

export default MainCard;
