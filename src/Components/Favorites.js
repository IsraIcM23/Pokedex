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


function Favorites({favorites}) {
    const data = useContext(ThemeContext); 
    const [ FavoriteData, SetFavoriteData ] = useState([]);
    
    
    let hash = {};
    var favoritesPokemons = favorites.favorites.filter(item => hash[item.id] ? false : hash[item.id] = true);

    useEffect(() => {
      var FavoriteData = [];
      for(let i=0; i < favoritesPokemons.length; i++) {
  
        var Types = [];
        for (let index = 0; index < favoritesPokemons[i].types.length; index++) {
          Types.push(favoritesPokemons[i].types[index].type.name);
        }
        

        FavoriteData.push({id:favoritesPokemons[i].id, name:favoritesPokemons[i].name, types:Types});
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
            <h1>Favorites</h1>
            <div style={{ height: 860, width: '100%' }}>
              <DataGrid rows={rows} columns={columns} />
            </div>
            {/* {
                favorites.favorites.map(item => (
                    <div key={item.id}> {item.id} </div>
                ))
            } */}
            
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