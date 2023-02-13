import Home from "./components/Home";
import Clientes from "./components/Clientes";
import Sobre from "./components/Sobre";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./components/img/img1.jpeg";
import Navbar from 'react-bootstrap/Navbar';
import "./App.css";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar bg="dark" variant={"dark"} expand="lg">
      <img
        src={img1}
        id="logo"
        width="40px"
        height="43px"
        alt="Logotipo da aplicação"
      />
                        <Navbar.Brand href="#"> Medilab Sistemas</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
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

                        </Navbar.Collapse>
                    </Navbar>

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
