import '../App.css';
import Footer from './Footer';
import Header from './Header';
import { connect, useDispatch } from 'react-redux';
import { useState, useContext, useEffect } from "react";
import * as favoriteActions from '../redux/actions/favoriteActions';
import PropTypes from 'prop-types';
import ThemeContext from "../Context/ThemeContext";
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Card from './Card';


function Favorites({favorites}) {
    const data = useContext(ThemeContext); 
    const [ FavoriteData, SetFavoriteData ] = useState([]);
    const [pokemonid, setpokemonid] = useState(2);
    
    const addpokemonid = (params) => {
      setpokemonid(params.id);
    }
    
    let hash = {};
    var favoritesPokemons = favorites.favorites.filter(item => hash[item.id] ? false : hash[item.id] = true);

    useEffect(() => {
      var FavoriteData = [];
      for(let i=0; i < favoritesPokemons.length; i++) {
        
        if(favoritesPokemons[i]){
          var Types = [];
          for (let index = 0; index < favoritesPokemons[i].types.length; index++) {
            Types.push(favoritesPokemons[i].types[index].type.name);
          }
          FavoriteData.push({id:favoritesPokemons[i].id, name:favoritesPokemons[i].name, types:Types});
        }
        
      }
      SetFavoriteData(FavoriteData);
    }, []);

 
    const rows: GridRowsProp = FavoriteData;
    
    const columns: GridColDef[] = [
      { field: 'id', headerName: 'Id', width: 150 },
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'types', headerName: 'Types', width: 150 },
    ];
    
    return (
        <div className={data.theme}>
            <Header/>
            <div style={{ height: 800, width: '40%', float: 'left', paddingBottom: '100px', cursor:'pointer' }}>
              <h1><b>Favorites</b></h1>
              <DataGrid 
                rows={rows} 
                columns={columns} 
                onRowClick={addpokemonid}
              />
            </div>
            <Card idpokemon={pokemonid}/>
            <Footer/>
        </div>
      );
  }
  
  Favorites.propTypes = {
    favorites: PropTypes.array
  }
  
  //Recibo el state del store
  function mapStateToProps(state, ownProps) {
    return {
      favorites: state
    }
  }
  
  export default connect(mapStateToProps)(Favorites);
//   export default Favorites;