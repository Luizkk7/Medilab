import Home from "./components/Home";
import Clientes from "./components/Clientes";
import Sobre from "./components/Sobre";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Medilab</h1>
      <BrowserRouter>
        <Nav variant="tabs">
          <Nav.Link as={Link} to="/">
            {" "}
            Pagína Inicial
          </Nav.Link>
          <Nav.Link as={Link} to="/Clientes">
            {" "}
            Cadastro de Clientes
          </Nav.Link>
          <Nav.Link as={Link} to="/Sobre">
            {" "}
            Sobre
          </Nav.Link>
        </Nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Clientes" element={<Clientes />}></Route>
          <Route path="/Sobre" element={<Sobre />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
