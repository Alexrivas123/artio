
import './App.css';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ArtistaPaginas from './paginas/ArtistaPaginas.js';
import ContactoPaginas from './paginas/ContactoPaginas.js';
import InicioPaginas from './paginas/inicioPaginas.js';
import Menu from './Componentes/Menu.js';
import DiscografiaPaginas from './paginas/DiscografiaPaginas.js';

function App() {
  return (
  <>
  <Router>
   <Menu />
   
    <div className="container pt-5 mt-5">

      <Routes>
        <Route path='/inicio' element={<InicioPaginas/>} />
        <Route path='/Artista' element={<ArtistaPaginas/>}/>
        <Route path='/Contacto' element={<ContactoPaginas/>}/>
        <Route path='/Discografia' element={<DiscografiaPaginas/>}/>
      </Routes>


    </div>
    </Router>
  </>
  
  );
}

export default App;
