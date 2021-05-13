export const COLUMNS = [
	{
		Header: 'Rand',
		accessor: 'id',
	},
	{
		Header: 'Data Scadență',
		accessor: 'date'
	},
	{
		Header: 'Rata credit',
		accessor: 'credit_rate'
	},
	{
		Header: 'Dobanda valuta',
		accessor: 'dobanda_um'
	},
	{
		Header: 'Dobanda %',
		accessor: 'dobanda_procent'
	},
	{
		Header: 'Rata lunara',
		accessor: 'rata_credit'
	},
	{
		Header: 'Comision Riscuri',
		accessor: 'comision_riscuri'
	},
	{
		Header: 'Sold Credit',
		accessor: 'sold_credit'
	}

];

export const GROUPED_COLUMNS = [
	{
		Header: 'Rand',
		accessor: 'id',
	},
	{
		Header: 'Data Scadență',
		accessor: 'date'
	},
	{
		Header: 'Rata credit',
		accessor: 'credit_rate'
	},
	{
		Header: 'Dobanda',
		columns: [
			{
				Header: 'Valuta',
				accessor: 'dobanda_um'
			},
			{
				Header: '%',
				accessor: 'dobanda_procent'
			}
		]
	},
	{
		Header: 'Rata lunara',
		accessor: 'rata_credit'
	},
	{
		Header: 'Comision Riscuri',
		accessor: 'comision_riscuri'
	},
	{
		Header: 'Sold Credit',
		accessor: 'sold_credit'
	}
];