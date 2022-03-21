import React, { useEffect, useState } from "react";
import { useTable } from 'react-table'
import pencil from '../assets/images/pencil.svg';
import xsquare from '../assets/images/xsquare.svg';
import Tabela from '../components/TabelaCompras'



export default function App() {
const restEndpoint = "http://localhost:5000/compra";

const callRestApi = async () => {
const response = await fetch(restEndpoint);
const jsonResponse = await response.json();
return jsonResponse;
};



function RenderResult() {
const [compras, baixarCompras] = useState('');

useEffect(() => {
callRestApi().then(
result => baixarCompras(result));
},[]);

var showModal = false;

return(
<div className="container">
  <div className="row">
    <div className="column">
        {/* Botões de navegação */}
        <div className="row">
        <div className="column column=10">
          <a href="/"><button>Voltar</button></a>
        </div>
        <div className="column column-40"></div>
        <div className="column column-10">
          <a href="/"><button>Novo</button></a>
        </div>
      </div>
      <h1 className='tittle'>Compras</h1>
      <label id="pesquisarCompras">Pesquisar Compras</label>
      <form><input type="text" id="pesquisarCompras" /></form>

    </div>
  </div>
  <div className="row">
    <div className="column">
      <div className="choiceScreen">
        <Tabela compras={compras}/>
      </div>
    </div>
  </div>
</div>
);
}
return RenderResult()
}