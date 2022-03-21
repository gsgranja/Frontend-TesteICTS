async function buscarPorId(id){
  fetch("http://localhost:5000/produto/"+id, {
  "method": "GET",
  "headers": {}
})
.then(response => {
  return response
})
.catch(err => {
  console.error(err);
});
}

export default function ModalCompra(props){  
  var compra = props.compra.compras; 
  var produto = buscarPorId(compra.id);
  var template = 
  <div className="modal">
      <form action="">
        <label>Tipo de Pagamento</label><br />
        <input className="border" type="text" id="nomep" name="compra" value={compra.tipo_pagamento} /><br />
        <label>Status</label><br />
        <input className="border" type="text" id="nome" name="descricao" value={compra.status} /><br />
        <label>Total</label><br />
        <input className="border" type="text" id="nomepre" name="total" value={compra.total}/><br />
        <label>Produto</label><br />
        <input className="border" type="text" id="nomepre" name="total" value={compra.id}/><br />
        <input type="submit" value="Submit" />
      </form>
    </div>;
    return template
  }


  