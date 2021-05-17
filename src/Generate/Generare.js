import React, {useMemo} from 'react';


import {useTable} from 'react-table';
import moment from 'moment';

import {GROUPED_COLUMNS} from './columns';

import './table.css';

const Generate = ({dates}) => {
	const ziuaScadenta = dates.scheduledDate;
	const dayDiff = moment(dates.dataCredit).date()-ziuaScadenta;
	const lunaAcordariiCreditului = moment(dates.dataCredit).month()+1;
	console.log('luna acordare credit', lunaAcordariiCreditului);
	let dataScadenta ='';
	
	console.log(dayDiff);
	dayDiff>=0 ? dataScadenta =  moment(dates.dataCredit).subtract(dayDiff, 'days').add(1, 'month'): dataScadenta = moment(dates.dataCredit).add(-dayDiff, 'days');
	console.log(dayDiff, dataScadenta.format('DD-MM-YYYY'));
	const dataAcordareCredit = dataScadenta.format('DD-MM-YYYY');

	const TABLE_DATA = [];
	const nrLuni = dates.numarLuni;
	GROUPED_COLUMNS[3].columns[0].Header=dates.valut;

	for (let i = 1; i <= nrLuni; i++) {
		TABLE_DATA.push({
			id: i, 
			date: dataScadenta.add(1, 'month').format('DD-MM-YYYY'), 
			sold_credit: dates.creditValue,
			dobanda_procent: dates.dobandaCredit,
			comision_riscuri: dates.comisionRiscuri
		});
	}
	
	console.log(TABLE_DATA);  
	const columns = useMemo(()=> GROUPED_COLUMNS, []);
	const data = TABLE_DATA;

	const tableInstance = useTable({columns, data});
	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

	return (
		<>
			<h2>Graficul de rambursare refăcut prin determinarea dobânzii variabile a creditului conform Contractului de credit bancar nr. {dates.contract}/{dataAcordareCredit}</h2>
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