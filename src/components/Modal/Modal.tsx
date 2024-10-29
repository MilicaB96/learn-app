import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Modal.scss';
import { useContext } from 'react';
import { LanguageContext } from '../../App';
import remove from '../../assets/remove.svg';
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'white',
	boxShadow: '0px 4px 9px #171a1f, 0px 0px 2px #171a1f',
	p: 4,
};

const title = {
	fontFamily: 'Montserrat',
	fontWeight: '700',
	fontSize: '24px',
	lineHeight: '36px',
};
const description = {
	fontFamily: 'Poppins',
	fontSize: '14px',
	lineHeight: '22px',
	fontWeight: '400',
};

export default function BasicModal({ open, handleClose, handleDelete }: any) {
	const lang = useContext(LanguageContext);
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<button className='modal-remove-button' onClick={handleClose}>
						<img className='modal-remove' src={remove} alt='' />
					</button>
					<Typography
						id='modal-modal-title'
						variant='h5'
						component='h2'
						sx={title}
					>
						{lang['delete-profile'].title}
					</Typography>
					<Typography
						id='modal-modal-description'
						sx={{ mt: 2, ...description }}
					>
						{lang['delete-profile'].description}
					</Typography>
					<div className='modal-buttons'>
						<button
							className='button-cancel modal-button'
							onClick={handleClose}
						>
							{lang['delete-profile'].cancel}
						</button>
						<button
							className='button-important modal-button'
							onClick={handleDelete}
						>
							{lang['delete-profile'].confirm}
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
