import { ErrorBoxProps } from './ErrorBoxProps';
import warning from '../../assets/warning.svg';

import './ErrorBox.scss';

function ErrorBox({ text }: ErrorBoxProps) {
	return (
		<div className='error-box'>
			<img className='error-icon' src={warning} alt='' />
			<p className='error-text'>{text}</p>
		</div>
	);
}

export default ErrorBox;
