import { JoinUsProps } from './JoinUsProps';
import './JoinUsBox.scss';

function JoinUsBox({
	title,
	description,
	image,
	buttonText,
	handleClick,
}: JoinUsProps) {
	return (
		<div className='join-us-container'>
			<div className='join-us-container-text'>
				<h1 className='join-us-container-title'>{title}</h1>
				<p className='text join-us-container-description'>{description}</p>
				<button
					onClick={handleClick}
					className='button-prime join-us-container-button'
				>
					{buttonText}
				</button>
			</div>
			<img className='join-us-container-image' src={image} alt='' />
		</div>
	);
}

export default JoinUsBox;
