import './App.css';
import MainCard from './Components/MainCard';
import SignIn from './Components/SignIn';
<<<<<<< HEAD
import NotFound from './Components/NotFound';
import { ThemeProvider } from './Context/ThemeContext';

import {Routes, Route} from 'react-router-dom';
import Favorites from './Components/Favorites';
=======

import {Routes, Route} from 'react-router-dom';
>>>>>>> e73151dd56775442cdb08b323b6f08c07d8dc6d4

function App() {
  return (
    <div className="App">
      <main>
<<<<<<< HEAD
        <ThemeProvider>
          <Routes>
            <Route path='/favorites' element={ <Favorites/> } />
            <Route path='/login' element={<SignIn />} />
            <Route path='/pokedex' element={ <MainCard /> } />
            <Route path='/' element={<SignIn />} />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </ThemeProvider>
=======
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/pokedex' element={ <MainCard /> } />
          <Route path='*' element={<h1>NO FOUND</h1>} />
        </Routes>
>>>>>>> e73151dd56775442cdb08b323b6f08c07d8dc6d4
      </main>  
    </div>
  );
}

export default App;





