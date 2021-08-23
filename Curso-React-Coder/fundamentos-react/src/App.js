import Primeiro from "./components/basicos/Primeiro.jsx";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
function App(props) {
  return (
    <div className="App">
      <h1>Inicio</h1>
      <Card titulo="Exemplo de card">
        <Aleatorio max={60} min={1} />
      </Card>
      <Card titulo="fragmento">
        <Fragmento />
      </Card>
      <Card titulo="com parametro">
        <ComParametro
          titulo="Segundo componente"
          subtitulo="muito legal"
          nota={9.9}
        />
      </Card>
    </div>
  );
}

export default App;
