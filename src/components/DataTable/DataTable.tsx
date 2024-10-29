import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpecializations } from '../../store/user/selectors';
import { useContext, useEffect } from 'react';
import { UserActionTypes } from '../../store/user/types';
import { LanguageContext } from '../../App';

interface DataTableProps {
	header1: string;
	header2: string;
	data: any;
	setValues: any;
	handleSubmit: any;
}

export default function DataTable({
	header1,
	header2,
	data,
	setValues,
	handleSubmit,
}: DataTableProps) {
	const dispatch = useDispatch();
	const lang = useContext(LanguageContext);
	const specializations = useSelector(selectSpecializations);
	useEffect(() => {
		if (
			data &&
			data?.some((item: any) => item.hasOwnProperty('specialization'))
		) {
			dispatch({ type: UserActionTypes.GET_SPECIALIZATIONS });
		}
	}, [data, dispatch]);
	const columns: GridColDef[] = [
		{
			field: 'fullName',
			headerClassName: 'all-trainers-header',
			headerAlign: 'left',
			renderHeader: (params: any) => <strong>{header1}</strong>,
			width: 275,
			resizable: false,
			valueGetter: (value, row) =>
				`${row.firstName || ''} ${row.lastName || ''}`,
		},
		{
			field: 'specialization',
			headerClassName: 'all-trainers-header',
			renderHeader: (params: any) => <strong>{header2}</strong>,
			headerAlign: 'left',
			type: 'string',
			resizable: false,
			width: 275,
		},
	];
	const rows = data?.length
		? [
				...data.map((item: any) => {
					return {
						...item,
						specialization:
							specializations &&
							specializations?.find(
								(el: any) => el?.id === item?.specialization
							)?.specialization,
					};
				}),
		  ]
		: [];
	return (
		<div className='all-trainers-table'>
			<DataGrid
				sx={{
					border: '1px solid lightgray',
					maxWidth: 600,
					minWidth: 400,

					'& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer':
						{
							display: 'none',
						},
					'.MuiDataGrid-columnSeparator': { display: 'none' },
					'& .MuiDataGrid-columnHeader': {
						backgroundColor: '#EAECEFFF',
						textTransform: 'uppercase',
					},
					'& .MuiDataGrid-scrollbar--horizontal': {
						display: 'none',
					},
					'& .MuiDataGrid-checkboxInput': {
						color: '#9095a0ff',
						'&.Mui-checked': {
							color: '#6355d8ff',
						},
					},
				}}
				rows={rows}
				columns={columns}
				checkboxSelection
				onRowSelectionModelChange={(item) => setValues(item)}
				rowSelectionModel={data?.id}
				hideFooter={true}
				autoHeight={true}
			/>
			<button
				type='button'
				className='button-prime all-trainers-button'
				onClick={() => handleSubmit()}
			>
				{lang['all-trainers'].add}
			</button>
		</div>
	);
}
