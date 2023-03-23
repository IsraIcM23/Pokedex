import './App.css';
import MainCard from './Components/MainCard';
import SignIn from './Components/SignIn';
import NotFound from './Components/NotFound';
import { ThemeProvider } from './Context/ThemeContext';

import {Routes, Route} from 'react-router-dom';
import Favorites from './Components/Favorites';

function App() {
  return (
    <div className="App">
      <main>
        <ThemeProvider>
          <Routes>
            <Route path='/favorites' element={ <Favorites/> } />
            <Route path='/login' element={<SignIn />} />
            <Route path='/pokedex' element={ <MainCard /> } />
            <Route path='/' element={<SignIn />} />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </ThemeProvider>
      </main>  
    </div>
  );
}

export default App;





