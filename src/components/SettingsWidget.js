import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

const SettingsWidget = () => {
	const [covidData, setCovidData] = useState([]);

	const {TotalConfirmed, TotalRecovered, TotalDeaths} = covidData

	const addCommas = (x) => {
		let string = '' + x
		return string.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	}

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get('https://api.covid19api.com/world/total')
				.then((response) => {
					setCovidData(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchData();
	}, []);
	
	return (
		<div className='world-info'>
			<h3>Covid Information</h3>
			<div className='icon'>
				<FontAwesomeIcon icon={faGlobeAmericas} />
				<p>World</p>
			</div>
			<div className='text'>
				<p>
					Infected - <span>{addCommas(TotalConfirmed)}</span>
				</p>
				<p>
					Recovered - <span>{addCommas(TotalRecovered)}</span>
				</p>
				<p>
					Deaths - <span>{addCommas(TotalDeaths)}</span>
				</p>
			</div>
		</div>
	);
};

export default SettingsWidget;
