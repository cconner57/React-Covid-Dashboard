import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfoWidget from './InfoWidget';
import USMap from './USMap';

const HomePage = () => {
	const [widgetData, setWidgetData] = useState([]);
	const [mapData, setMapData] = useState([]);

	const { recovered, positive, death } = widgetData;

	useEffect(() => {
		const requestOne = axios.get('http://covidtracking.com/api/us');
		const requestTwo = axios.get('https://covidtracking.com/api/states');
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
		</div>
	);
};

export default HomePage;
