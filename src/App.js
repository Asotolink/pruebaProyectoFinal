import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import Banner from './img/header-banner.webp';

function App() {
  return (
    <div className="container">
      <header className="header">
      <img src={Banner}></img>
      </header>
      <main>
        <p className='descripcionIndex texto'>Realiza tests de los temas que te interesen y consigue tantos puntos como puedas. ¡Enséñale a tus amigos y al mundo entero tus logros y tu nivel!</p>
        <button className='boton'>Inicia Sesión</button>
        <br></br>
        <button className='boton'>Regístrate</button>

        <h4>Tutorial Básico</h4>
        <p className='texto'>Escoge una categoría.</p>
        <img src={Banner}></img>
      </main>
      <Navbar></Navbar>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
