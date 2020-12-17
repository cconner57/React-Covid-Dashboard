import React, { useState, useEffect } from 'react';
import USA from '@svg-maps/usa';
import { SVGMap } from 'react-svg-map';

const USMap = ({ stats }) => {
	const [stateLocation, setStateLocation] = useState({ pointedLocation: null });
	const [findState, setFindState] = useState();

	const statesObj = {
		AL: 'Alabama',
		AK: 'Alaska',
		AZ: 'Arizona',
		AR: 'Arkansas',
		CA: 'California',
		CO: 'Colorado',
		CT: 'Connecticut',
		DE: 'Delaware',
		FL: 'Florida',
		GA: 'Georgia',
		HI: 'Hawaii',
		ID: 'Idaho',
		IL: 'Illinois',
		IN: 'Indiana',
		IA: 'Iowa',
		KS: 'Kansas',
		KY: 'Kentucky',
		LA: 'Louisiana',
		ME: 'Maine',
		MD: 'Maryland',
		MA: 'Massachusetts',
		MI: 'Michigan',
		MN: 'Minnesota',
		MS: 'Mississippi',
		MO: 'Missouri',
		MT: 'Montana',
		NE: 'Nebraska',
		NV: 'Nevada',
		NH: 'New Hampshire',
		NJ: 'New Jersey',
		NM: 'New Mexico',
		NY: 'New York',
		NC: 'North Carolina',
		ND: 'North Dakota',
		OH: 'Ohio',
		OK: 'Oklahoma',
		OR: 'Oregon',
		PA: 'Pennsylvania',
		RI: 'Rhode Island',
		SC: 'South Carolina',
		SD: 'South Dakota',
		TN: 'Tennessee',
		TX: 'Texas',
		UT: 'Utah',
		VT: 'Vermont',
		VA: 'Virginia',
		WA: 'Washington',
		WV: 'West Virginia',
		WI: 'Wisconsin',
		WY: 'Wyoming',
	};

	const addCommas = (x) => {
		if(x) {
			return x.toLocaleString('en-US', { minimumFractionDigits: 0 });
		} else {
			return x
		}
	};

	useEffect(() => {
		const map = document.querySelectorAll('[aria-label="Map of USA"] > path');
		const state = document.querySelector('.state-info');

		map.forEach((usState) => {
			usState.addEventListener('mousemove', (e) => {
				state.style.display = 'block';
				state.style.animation = 'fadeIn .5s';
				state.style.left = e.clientX + 25 + 'px';
				state.style.top = e.clientY + 'px';
			});
			usState.addEventListener('mouseout', () => {
				state.style.display = 'none';
			});
		});
	}, []);

	const getStateKey = (value) => {
		for (let state in statesObj) {
			if (statesObj[state] === value) return state;
		}
	};

	const handleLocationMouseOver = (e) => {
		const pointedLocation = e.target.attributes.name.value;
		setStateLocation({ pointedLocation });
		const selectedState = getStateKey(pointedLocation);
		const matchedState = stats.find((e) => {
			return e.state === selectedState;
		});
		setFindState(matchedState);
	};

	return (
		<div className='map-container'>
			<SVGMap map={USA} onLocationMouseOver={handleLocationMouseOver} />
			<div className='state-info'>
				<h3>{stateLocation.pointedLocation}</h3>
				<span>
					<p>Recovered: </p>
					<p>
						{findState === undefined
							? 'Not Available'
							: addCommas(findState.recovered) === null
							? 'Not Available'
							: addCommas(findState.recovered)}
					</p>
					<p>Infected: </p>
					<p>
						{findState === undefined
							? 'Not Available'
							: addCommas(findState.positive) === null
							? 'Not Available'
							: addCommas(findState.positive)}
					</p>
					<p>Deaths: </p>
					<p>
						{findState === undefined
							? 'Not Available'
							: addCommas(findState.death) === null
							? 'Not Available'
							: addCommas(findState.death)}
					</p>
				</span>
				<h5>
					Last Updated:&nbsp;
					{findState === undefined
						? 'Not Available'
						: findState.lastUpdateEt === null
						? 'Not Available'
						: findState.lastUpdateEt}
				</h5>
			</div>
		</div>
	);
};

export default USMap;
