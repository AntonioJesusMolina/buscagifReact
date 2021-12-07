import logo from "./logo.svg";
import "./App.css";
import Cabecera from "./Components/Cabecera";

function App() {
  return (
    <div className="App">
      <header id="cabecera">
        <div id="cab">
          <h1 id="titulo">BUSCADOR DE GIFS</h1>
        </div>
      </header>
      <Cabecera></Cabecera>
    </div>
  );
}

export default App;
