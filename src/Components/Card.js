import '../App.css';
import {useEffect, useState, useContext} from 'react';
import MediaCard from './CustomCard';
import { AppStats } from './Stats';
import useCustomApi from './CustomApi';
import ThemeContext from "../Context/ThemeContext";
import { connect, useDispatch } from 'react-redux';
import * as favoriteActions from '../redux/actions/favoriteActions';
import PropTypes from 'prop-types';

function Card({favorites, idpokemon}) {
  
  const [pokeApiDomain, currentId, setCurrentId, pokemon, setPokemon, isLoading, setIsLoading, setCurrentType, doubleDamageFrom, setdoubleDamageFrom, halfDamageFrom, sethalfDamageFrom, weaknesses, setweaknesses, getPokemon] = useCustomApi();
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState([]);  
  const data = useContext(ThemeContext);

  //Reduce
  const [favorite, setfavorite] = useState({id: ""});
  const dispatch = useDispatch();

  function AddFavorite(){
    setfavorite({ ...favorite, id:currentId, name: pokemon.name, types: pokemon.types});
  }

  function RemoveFavorite(){
    dispatch(favoriteActions.DeleteFavorite(currentId));
  }

  useEffect(() => {
    dispatch(favoriteActions.AddFavorite(favorite));
  }, [favorite])

  
  useEffect(() => {

    setIsLoading(true);
    fetch(`${pokeApiDomain}${idpokemon}`)
      .then(response => response.json())
      .then(pokemonData => {
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        setStats(pokemonData.stats);

        var chartData = [];
        stats?.forEach(item => { 
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

        setIsLoading(false);
        
    })
  }, [idpokemon]);


  return (
    <div>


      <div>
      
      {
        isLoading ? (<></>) : 
        (
          <div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft:'60%',
              padding:'25px'
            }}>
              
              <div>
                <MediaCard 
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
                  favorites={favorites}
                  AddFav={AddFavorite}
                  RemFav={RemoveFavorite}
                />
              </div>
            
            </div>
          </div>
        )
      }  
      </div>

    </div>
  );
}

// export default MainCard;

Card.propTypes = {
  favorites: PropTypes.array
}

//Recibo el state del store
function mapStateToProps(state, ownProps) {
  return {
    favorites: state
  }
}

export default connect(mapStateToProps)(Card);
