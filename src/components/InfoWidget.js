import React from 'react';

const InfoWidget = ({ description, stats, classStyle, icon }) => {
	const addCommas = (x) => {
		let string = '' + x;
		return string.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	};
	
	return (
		<div className='widget'>
			<div className={`icon ${classStyle}`}>
				<img src={`/media/${icon}`} alt='mask' />
			</div>
			<div className='stats'>
				<h4>{description}</h4>
				<p>{stats !== undefined ? addCommas(stats) : <span>API Down</span>}</p>
			</div>
		</div>
	);
};

export default InfoWidget;
