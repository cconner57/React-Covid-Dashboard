import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Login from './Login'
import InfoWidget from './InfoWidget';
import USMap from './USMap';

const HomePage = () => {
	const [widgetData, setWidgetData] = useState([]);
	const [mapData, setMapData] = useState([]);
	const loggedIn = sessionStorage.getItem('loggedIn');

	const { recovered, positive, death, dateChecked } = widgetData;

	const modifyDate = (timestamp) => {
		if (timestamp) {
			const oldDate = timestamp.toString().split('T');
			return (
				oldDate[0].slice(5).replace('-', '/') + '/' + oldDate[0].slice(0, 4)
			);
		} else {
			return timestamp;
		}
	};

	useEffect(() => {
		const requestOne = axios.get(
			'https://api.covidtracking.com/v1/us/current.json'
		);
		const requestTwo = axios.get(
			'https://api.covidtracking.com/v1/states/current.json'
		);
		const fetchData = async () => {
			await axios
				.all([requestOne, requestTwo])
				.then(
					axios.spread((...response) => {
						const responseOne = response[0];
						const responseTwo = response[1];
						setWidgetData(responseOne.data[0]);
						setMapData(responseTwo.data);
					})
				)
				.catch((error) => {
					console.log(error);
				});
		};
		fetchData();
	}, []);

	return (
		<div className='home-container'>
			{loggedIn || <Login />}
			<h5>Dashboard</h5>
			<div className='widgets-container'>
				<InfoWidget
					description='Recovered'
					stats={recovered}
					classStyle='recovered'
					icon='plus.svg'
				/>
				<InfoWidget
					description='Total Sick'
					stats={positive}
					classStyle='sick'
					icon='mask.svg'
				/>
				<InfoWidget
					description='Deaths'
					stats={death}
					classStyle='deaths'
					icon='skull.svg'
				/>
			</div>
			<USMap stats={mapData} />
			<p className='updated'>Last Updated: {modifyDate(dateChecked)}</p>
		</div>
	);
};

export default HomePage;
