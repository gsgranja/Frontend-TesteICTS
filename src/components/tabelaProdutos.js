import React from 'react';
import ReactDOM from 'react-dom';

import { useTable } from 'react-table';

export default function Tabela(produtos) {    
    var data = []
    var produto = ""
    Object.values(produtos.produtos).map((valor)=>
    data.push(
    {
        id: valor.id,
        nome: valor.nome,
        descricao: valor.descricao,
        preco: valor.preco,        
        updatedAt: valor.updatedAt,
        createdAt: valor.createdAt
    } )
    )

  function handleEdit(row) {
    var compra = row;
    alert(JSON.stringify(row.id))
    return row
  }

   const columns = React.useMemo(
     () => [
       {
         Header: 'ID',
         accessor: 'id', // accessor is the "key" in the data
       },
       {
         Header: 'Nome',
         accessor: 'nome',
       },
       {
        Header: 'Descrição',
        accessor: 'descricao',
      },
      {
        Header: 'Preço',
        accessor: 'preco',
      },
      {
        Header: 'Criado em',
        accessor: 'createdAt',
      },{
        Header: 'Atualizado',
        accessor: 'updatedAt',
      },{
        Header: 'Ações',
        accessor: 'action',
        Cell: row => (
        <div>
           <a className='button button-small' onClick={e=> handleEdit(row.row.original)}>Deletar</a>
           <a className='button button-small' onClick={e=> handleEdit(row.row.original)}>Editar</a>
        </div>
        )
      }
      
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
       <>
     <table {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
       
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}                  
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </>
   )
 }