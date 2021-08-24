import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia.jsx";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ParOUImpar from "./components/condicional/ParOUImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";

function App(props) {
  return (
    <div className="App">
      <h1>Inicio</h1>
      <Card titulo=" comunicação direta pai/filho" color="purple">
        <DiretaPai />
      </Card>
      <Card titulo="Usuário ou deslogado" color="purple">
        <UsuarioInfo usuario={{ nome: " fernando" }} />
      </Card>
      <Card titulo="par ou impar" color="purple">
        <ParOUImpar numero={21} />
      </Card>
      <Card titulo="map com tabela" color="purple">
        <ListaProdutos />
      </Card>
      <Card titulo="Lista renderizando" color="purple">
        <ListaAlunos />
      </Card>
      <Card titulo="Familia props - componentes com filhos" color="purple">
        <Familia sobrenome="silva">
          <FamiliaMembro nome="joao" />
          <FamiliaMembro nome="junio" />
          <FamiliaMembro nome="joana" />
        </Familia>
      </Card>
      <Card titulo="Número aleatório" color="green">
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
