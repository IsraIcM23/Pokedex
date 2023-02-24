import './App.css';
import MainCard from './Components/MainCard';
import SignIn from './Components/SignIn';

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/pokedex' element={ <MainCard /> } />
          <Route path='*' element={<h1>NO FOUND</h1>} />
        </Routes>
      </main>  
    </div>
  );
}

export default App;





