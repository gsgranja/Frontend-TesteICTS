import React, { useEffect, useState } from "react";
import pencil from '../assets/images/pencil.svg';
import xsquare from '../assets/images/xsquare.svg';


export default function App() {
const restEndpoint = "http://localhost:5000/produto";

const callRestApi = async () => {
const response = await fetch(restEndpoint);
const jsonResponse = await response.json();
return jsonResponse[0];
};

function RenderResult() {
const [produtos, baixarProdutos] = useState('');

useEffect(() => {
callRestApi().then(
result => baixarProdutos(result));
},[]);

var showModal = false;

return(
<div className="container">

  <div className="modal">
    <form action="">
      <label>Nome Produto:</label><br />
      <input className="border" type="text" id="nomep" name="produto" /><br />
      <label>Descrição:</label><br />
      <input className="border" type="text" id="nome" name="descricao" /><br />
      <label>Preço</label><br />
      <input className="border" type="text" id="nomepre" name="preco" /><br />
      <input type="submit" value="Salvar" />
    </form>
  </div>

  <div className="row">
    <div className="column">


      <div className="row">
        <div className="column column=10">
          <a href="/"><button>Voltar</button></a>
        </div>
        <div className="column column-40"></div>
        <div className="column column-10">
          <a href="/"><button>Novo</button></a>
        </div>
      </div>


      <h1 className='tittle'>Produtos</h1>

      <label id="pesquisarProduto">Pesquisar Produto</label>

      <form><input type="text" id="pesquisarProduto" /></form>


    </div>
  </div>

  <div className="row">
    <div className="column">
      <div className="choiceScreen">
        <table className="border">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇAO</th>
              <th>PREÇO</th>
              <th>CRIADO EM</th>
              <th>ATUALIZADO EM</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(produtos).map((valor, i) => (
              <td key={i}>
                {valor}
              </td>
              ))}

              <td>
                <div className="row">
                  <div className="column">
                      <img  src={pencil}></img>
                  </div>    
                  <div className="column">
                    <img  src={xsquare}></img>
                </div>                   
                </div>
                
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</div>


);
}
return RenderResult()
}