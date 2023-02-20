import { FaBeer } from 'react-icons/fa';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <ItemListContainer greeting={'Hazlos Volar'} />
      </div>

    </div>
  );




}


export default App;  
