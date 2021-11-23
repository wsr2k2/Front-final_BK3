import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const ingredientes = evento.target.ingredientes.value;
    const preparo = evento.target.preparo.value;
    const historia = evento.target.historia.value;
    const imagem = evento.target.imagem.value;

    const italian = {
      nome,
      ingredientes,
      preparo,
      historia,
      imagem
    }
    
    try {
      const response = await Api.fetchPost(italian)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Pratos</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Digite o nome do prato"/>
                  <label htmlFor="floatingInput">Nome do Prato</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="ingredientes" id="floatingsalario" placeholder="Digite os in do prato"/>
                  <label htmlFor="floatingsalario">Ingredientes</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="preparo" id="floatingInput" placeholder="Digite o modo de preparo"/>
                  <label htmlFor="floatingInput">Preparo</label>
                </div>
              </div>              
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="historia" id="floatingInput" placeholder="Digite a história do prato"/>
                  <label htmlFor="floatingInput">História</label>
                </div>
              </div>              
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="imagem" id="floatingInput" placeholder="Insira a URL da imagem"/>
                  <label htmlFor="floatingInput">Imagem</label>
                </div>
              </div>              
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
