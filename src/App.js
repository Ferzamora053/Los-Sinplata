//import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar'
import Titulo from './components/Titulo';
import Carro from './components/Carro';
import Presentacion from './components/Presentacion';
import Objetivos from './components/Objetivos';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo/>
      <Carro/>
      <Presentacion/>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm">
            <Objetivos/>
          </div>
          <div class="col-sm">
            <Objetivos/>
          </div>
          <div class="col-sm">
            <Objetivos/>
          </div>
        </div>
      </div>
      <Usuarios/>

    </div>
  );
}

export default App;
