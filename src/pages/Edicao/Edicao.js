import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // alteração do prato
  const [italian, setItalian] = useState({});

  // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getItalianById();
  }, []);

  const getItalianById = async () => {
    // faz uma chamada para api para pegar o objeto de acordo com o id.
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    // atualiza o prato de acordo com o resultado.
    setItalian(result);
  };

  const handleFieldsChange = (event) => {
    // clono meu objeto do prato
    const campos = { ...italian };
    // para cada input eu atualizo o seu respectivo valor no obj
    campos[event.target.name] = event.target.value;
    // atualizo o meu prato com esse novo objeto.
    setItalian(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // faco uma copia do prato com obj atualizado.
    const italianObj = { ...italian };
    
    try {
      const response = await Api.fetchPut(italianObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edicao do Prato</h3>
            </div>
          </div>
        </div>
        
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={italian.nome}
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o nome do prato"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Nome do Prato</label>
                </div>
              </div>
              
              <div className="col">
                <div className="form-floating">                  
                  <input
                    type="text"
                    value={italian.ingredientes}
                    className="form-control"
                    name="ingredientes"
                    id="floatingsalario"
                    placeholder="Digite os ingredientes"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingsalario">Ingredientes</label>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">                  
                  <input
                    type="text"
                    value={italian.preparo}
                    className="form-control"
                    name="preparo"
                    id="floatingInput"
                    placeholder="Digite o modo de preparo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Modo de Preparo</label>
                </div>
              </div> 
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">                  
                  <input
                    type="text"
                    value={italian.historia}
                    className="form-control"
                    name="historia"
                    id="floatingInput"
                    placeholder="Digite o modo de preparo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">História do Prato</label>
                </div>
              </div> 
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">                  
                  <input
                    type="text"
                    value={italian.imagem}
                    className="form-control"
                    name="imagem"
                    id="floatingInput"
                    placeholder="Insira a URL da Imagem"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Imagem</label>
                </div>
              </div> 
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;
