import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { UserActionTypes } from '../../store/user/types';
import { selectSpecializations } from '../../store/user/selectors';
import { LanguageContext } from '../../App';

function createData(name: string, other: string) {
	return { name, other };
}
export default function BasicTable({ header1, header2, data }: any) {
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
	const rows = data?.length
		? [
				...data.map((item: any) =>
					createData(
						`${item.firstName} ${item.lastName}`,
						`
		${
			data && data?.some((item: any) => item.hasOwnProperty('specialization'))
				? specializations?.length &&
				  specializations.filter(
						(spec: any) => spec.id === item.specialization
				  )[0]?.specialization
				: item.isActive
				? lang.status.active
				: lang.status['not-active']
		}
		`
					)
				),
		  ]
		: [];
	return (
		<TableContainer>
			<Table
				sx={{ border: '1px solid lightgray', maxWidth: 600, minWidth: 400 }}
				aria-label='simple table'
			>
				<TableHead>
					<TableRow>
						<TableCell
							sx={{
								backgroundColor: '#EAECEFFF',
								fontWeight: '700',
								textTransform: 'uppercase',
							}}
						>
							{header1}
						</TableCell>
						<TableCell
							sx={{
								backgroundColor: '#EAECEFFF',
								fontWeight: '700',
								textTransform: 'uppercase',
							}}
						>
							{header2}
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell
								component='th'
								scope='row'
								sx={{ borderBottom: '1px solid lightgray' }}
							>
								{row.name}
							</TableCell>
							<TableCell sx={{ borderBottom: '1px solid lightgray' }}>
								{data &&
								data?.some((item: any) => item.hasOwnProperty('isActive')) ? (
									row.other.trim() === 'ACTIVE' ? (
										<span style={{ color: 'green' }}>{row.other}</span>
									) : (
										<span style={{ color: 'red' }}>{row.other}</span>
									)
								) : (
									row.other
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
