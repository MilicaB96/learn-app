import './Box.scss';

function Box({ image, title, tag, date, timeToRead }: any) {
	return (
		<div className='box'>
			<img className='box-image' src={image} alt='' />
			<div className='box-bottom'>
				<p className='box-tag'>{tag}</p>
				<h1 className='box-title'>{title}</h1>
				<span className='box-date'>{date}</span>
				<div className='box-pill'>
					<span className='box-time'>{timeToRead}</span>
				</div>
			</div>
		</div>
	);
}

export default Box;
