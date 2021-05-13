import React, {useMemo} from 'react';
import {useTable} from 'react-table';
import {GROUPED_COLUMNS} from './columns';

import './table.css';

const Generate = () => {
	const TABLE_DATA = [];
	let today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0'); 
	const yyyy = today.getFullYear();
	today = `${mm}/${dd}/${yyyy}`;
	console.log(today);

	for (let i = 1; i <= 20; i++) {
		TABLE_DATA.push({id: i, date: today});
	  }
	
	console.log(TABLE_DATA);  
	const columns = useMemo(()=> GROUPED_COLUMNS, []);
	const data = useMemo(()=> TABLE_DATA, []);

	const tableInstance = useTable({columns, data});
	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

	return (
		<>
			<h2>Graficul de rambursare refăcut  prin determinarea dobânzii variabile a creditului conform Contractului de credit bancar nr. 458_22.02.2007</h2>
			<table {...getTableProps()}>
				<thead >
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								headerGroup.headers.map(column => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))
							}
						</tr>	
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell=> 	(
								<td {...cell.getCellProps()}>
									{cell.render('Cell')}
									</td>))}
							</tr>
						)
					})
					}
				</tbody>
			</table>
		</>
	);
  }
   
  export default Generate;