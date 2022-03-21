import React from 'react';
import ReactDOM from 'react-dom';

import { useTable } from 'react-table';
import ModalCompra from '../components/ModalCompra'

export default function Tabela(compras) {    
    var data = []
    Object.values(compras.compras).map((valor)=>
    data.push(
    {
        id: valor.id,
        tipo_pagamento: valor.tipo_pagamento,
        total: valor.total,
        status: valor.status,
        produtoId: valor.produtoId,
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
         Header: 'Tipo Pagamento',
         accessor: 'tipo_pagamento',
       },
       {
        Header: 'Valor Total',
        accessor: 'total',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Produto Id',
        accessor: 'produtoId',
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
    <ModalCompra classname="modal" compra={compras} />
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