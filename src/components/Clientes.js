import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

class Clientes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome:"",
      email:"",
      cpf:"",
      bairro:"",
      DataNascimento:"",
      DataDeCadastro:"",
      cep:"",
      estado:"",
      clientes: [],
      ModalAberta: true
    };
  }

  componentDidMount() {
    this.buscarCliente();
  }

  buscarCliente = () => {
    fetch("http://localhost:3000/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ clientes: dados });
      });
  };

  deletarCliente = (id) => {
    fetch(`http://localhost:3000/${id}/`, { method: "DELETE" }).then(
      (resposta) => {
        if (resposta.ok) {
          this.buscarCliente();
        }
      }
    );
  };

  cadastraCliente = (cliente) => {
    fetch(`http://localhost:3000/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente)
    })
    .then((resposta) => {
        if (resposta.ok) {
            this.buscarCliente();
        } else {
            alert('Não foi possível adicionar o cliente.');
        }
    });
};

  renderTabela() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>nome</th>
            <th>email</th>
            <th>data Nascimento</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {this.state.clientes.map((cliente) => (
            <tr key={Object.keys(cliente)[0]}>
              <td>{Object.keys(cliente)[0]}</td>
              <td>{cliente[Object.keys(cliente)[0]].Nome}</td>
              <td>{cliente[Object.keys(cliente)[0]].Email}</td>
              <td>{cliente[Object.keys(cliente)[0]].DataNascimento}</td>
              <td>
              <Button variant="primary" type="submit" onClick={this.submit}>
        atualizar
      </Button>
                <Button
                  variant="danger"
                  onClick={() => this.deletarCliente(Object.keys(cliente)[0])}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  atualizaEmail = (e) => {
    this.setState({
      email: e.target.value, // corrigido para atualizar o email
    });
  };

  submit = (e) => {
    e.preventDefault(); // previne o comportamento padrão do formulário

    const cliente = {
      nome: this.state.nome,
      email: this.state.email,
    };

    this.cadastraCliente(cliente); // adicionado argumento ao método cadastraCliente
  };
   
  reset = () =>{
    this.setState(
      {
        id: 0,
        nome:"",
        email:""
      }
    )
  }
  fecharModal = () => {
    this.setState({
      ModalAberta: false
    });
  };
  
  abrirModal = () => {
    this.setState({
      ModalAberta: true
    });
  };

  render() {
    return (
      <div>

         <Modal show={this.state.ModalAberta} onHide={this.fecharModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cadasto de Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Row className="mb-3">
      
      <Form.Label>Nome</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Digite o nome do cliente"value={this.state.Nome} onChange={this.atualizaNome}/>
        
        <br />
        
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={this.state.Email} onChange={this.atualizaEmail}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridZip" value={this.state.cpf}>
          <Form.Label>CNPJ/CPF</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridZip" value={this.state.DataNascimento}>
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Data de Cadastro</Form.Label>
          <Form.Control />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Telefone</Form.Label>
          <Form.Control />
        </Form.Group>

      

      

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Cep</Form.Label>
          <Form.Control />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Bairro</Form.Label>
        <Form.Control placeholder="Digite seu bairro"  />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Choose...">
            
            <option>Rio de Janeiro</option>
            <option>Sao Paulo</option>
            <option>Minas Gerais</option>
            <option>Rio Grande do Sul</option>
            <option>Bahia</option>
            <option>Ceara</option>
          </Form.Select>
        </Form.Group>

  
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      

      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.fecharModal}>
            Close
          </Button>
          <Button variant="primary" onClick={this.fecharModal}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>

      <hr></hr>
      <Button variant="warning" type="submit" onClick={this.abrirModal}>
        Novo
      </Button>
      <Button variant="primary" type="submit" onClick={this.submit}>
        Enviar
      </Button>



          
    
        {this.renderTabela()}
      </div>
    );
  }
}

export default Clientes;
