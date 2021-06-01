import React, {useMemo} from 'react';

import {useTable} from 'react-table';
import moment from 'moment';

import {GROUPED_COLUMNS} from './columns';
import {calcularePMT, calculareDobanda} from '../Utils/Utils';

import './table.css';

const Generate = ({dates}) => {
	const ziuaScadenta = dates.scheduledDate;
	let soldCredit = dates.creditValue;
	
	const dayDiff = moment(dates.dataCredit).date()-ziuaScadenta;

	let dataScadenta ='';
	let dataCalcul;
	
	console.log(dayDiff);
	dayDiff>0 ? dataScadenta =  moment(dates.dataCredit).subtract(dayDiff, 'days'): dataScadenta = moment(dates.dataCredit).add(-dayDiff, 'days').subtract(1, 'month');
	
	if(dayDiff===0)	{
		dataCalcul = 30;
	} else if(dayDiff>0) {
		dataCalcul = 30-dayDiff;
	} else {
		dataCalcul = dayDiff;
	}

	const acordareCredit = moment(dates.dataCredit).format('DD-MM-YYYY');

	const TABLE_DATA = [];
	const nrLuni = dates.numarLuni;
	GROUPED_COLUMNS[3].columns[0].Header=dates.valut;

	for (let i = 1; i <= nrLuni; i++) {
		if(i!==1) {
			soldCredit=TABLE_DATA[i-2].sold_credit-TABLE_DATA[i-2].credit_rate;
			dataCalcul = 30;

		}
		TABLE_DATA.push({
			id: i, 
			date: dataScadenta.add(1, 'month').format('DD-MM-YYYY'), 
			sold_credit: parseFloat(soldCredit).toFixed(2),
			rata_credit: -(calcularePMT(dates.dobandaCredit/1200, 240-i+1, soldCredit)/30).toFixed(2),
			dobanda_procent: parseFloat(dates.dobandaCredit).toFixed(2),
			dobanda_um: parseFloat(dataCalcul*calculareDobanda(soldCredit, dates.dobandaCredit)).toFixed(2),
			comision_riscuri: dates.comisionRiscuri,
			credit_rate: -(calcularePMT(dates.dobandaCredit/1200, 240-i+1, soldCredit) + 30*calculareDobanda(soldCredit, dates.dobandaCredit)).toFixed(2)
		});
	}
	
	console.log(TABLE_DATA);  
	const columns = useMemo(()=> GROUPED_COLUMNS, []);
	const data = TABLE_DATA;

	const tableInstance = useTable({columns, data});
	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;

	return (
		<>
			<h2>Graficul de rambursare refăcut prin determinarea dobânzii variabile a creditului conform Contractului de credit bancar nr. {dates.contract}/{acordareCredit}</h2>
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