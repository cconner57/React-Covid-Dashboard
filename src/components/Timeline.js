import React from 'react';

const Timeline = () => {
	const events = [
		{
			id: 1,
			date: 'December 31, 2019',
			description:
				'Chinese Health officials inform the WHO about a cluster of 41 patients with a mysterious pneumonia. Most are connected to Huanan Seafood Wholesale Market.',
		},
		{
			id: 2,
			date: 'January 11, 2020',
			description:
				'China records its first death linked to the novel coronavirus.',
		},
		{
			id: 3,
			date: 'January 20, 2020',
			description:
				'The first US case is reported: a 35-year-old man in Snohomish County, Washington.',
		},
		{
			id: 4,
			date: 'January 30, 2020',
			description: 'WHO declares a global public-health emergency.',
		},
		{
			id: 5,
			date: 'January 31, 2020',
			description:
				'President Trump bans foreign nationals from entering the US if they had been in China within the prior two weeks.',
		},
		{
			id: 6,
			date: 'February 6, 2020',
			description:
				'A person in California dies from the coronavirus, the first known American death. ',
		},
		{
			id: 7,
			date: 'February 11, 2020',
			description:
				'WHO announces that the disease caused by the novel coronavirus will be called "COVID-19."',
		},
		{
			id: 8,
			date: 'March 11, 2020',
			description: 'WHO declares the outbreak a pandemic.',
		},
		{
			id: 9,
			date: 'March 11, 2020',
			description:
				'President Trump bans all travel from 26 European countries.',
		},
		{
			id: 10,
			date: 'March 13, 2020',
			description: 'Trump declares a national emergency in the US.',
		},
		{
			id: 11,
			date: 'March 13, 2020',
			description: 'Trump declares a national emergency in the US.',
		},
		{
			id: 12,
			date: 'March 23, 2020',
			description:
				'New York City confirms 21,000 cases, making it the epicenter of the outbreak in the US.',
		},
		{
			id: 13,
			date: 'March 26, 2020',
			description:
				"Total confirmed cases in the US reach 82,404 — the highest in the world — surpassing China's 81,782 and Italy's 80,589.",
		},
		{
			id: 14,
			date: 'March 31, 2020',
			description: 'More than 1/3 of humanity is under some form of lockdown.',
		},
		{
			id: 15,
			date: 'April 2, 2020',
			description: 'The world passes 1 million COVID-19 infections.',
		},
		{
			id: 16,
			date: 'April 7, 2020',
			description: 'The global death toll surpasses 100,000.',
		},
		{
			id: 17,
			date: 'April 14, 2020',
			description:
				'President Donald Trump orders a halt on $400 million in funding for the World Health Organization.',
		},
		{
			id: 18,
			date: 'May 21, 2020',
			description: 'The number of global COVID-19 cases surpasses 5 million.',
		},
		{
			id: 19,
			date: 'June 29, 2020',
			description:
				'The number of global COVID-19 cases surpass 10 million, and global deaths surpass 500,000.',
		},
	];

	let leftColumn = events
		.filter((event) => event.id % 2 === 1)
		.map((event) => {
			return (
				<div key={event.id} className='side-left'>
					<h4>{event.date}</h4>
					<p>{event.description}</p>
				</div>
			);
		});
		
	let rightColumn = events
		.filter((event) => event.id % 2 === 0)
		.map((event) => {
			return (
				<div key={event.id} className='side-right'>
					<h4>{event.date}</h4>
					<p>{event.description}</p>
				</div>
			); 
		});

	return (
		<div className='timeline-container'>
			<h5>Timeline</h5>
			<div className='timeline'>
				<div className='timeline-left'>{leftColumn}</div>
				<div className='timeline-middle'></div>
				<div className='timeline-right'>{rightColumn}</div>
			</div>
		</div>
	);
};

export default Timeline;
