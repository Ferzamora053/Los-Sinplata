import './App.css';
import Navbar from './components/Navbar'
import Titulo from './components/Titulo';
import Carro from './components/Carro';
import Presentacion from './components/Presentacion';
import Objetivos from './components/Objetivos';
import Usuarios from './components/Usuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Titulo/>
      <Carro/>
      <div class="container mt-5">
        <Presentacion/>
      </div>
      <div class="container mt-5">
        <Objetivos/>
      </div>
      <Usuarios/>

    </div>
  );
}

export default App;

