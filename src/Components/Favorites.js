import '../App.css';
import Footer from './Footer';
import Header from './Header';
import { connect, useDispatch } from 'react-redux';
import { useState, useContext } from "react";
import * as favoriteActions from '../redux/actions/favoriteActions';
import PropTypes from 'prop-types';
import ThemeContext from "../Context/ThemeContext";

function Favorites({favorites}) {
    const data = useContext(ThemeContext); 
    
    return (
        <div className={data.theme}>
            <Header/>
            <h1>Hello From Favorites</h1>
            {
                favorites.favorites.map(item => (
                    <div key={item.id}> {item.id} </div>
                ))
            }
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