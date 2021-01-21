import React from 'react';
// import axios from 'axios';

const TestingCenter = () => {
	// const [data, setData] = useState('Test');

	// let zipCode = []
	// const handleChange = (e) => {
	// 	zipCode = e.target.value
	// 	console.log(zipCode)
	// }

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		await axios
	// 			.get(yelpAPI, options)
	// 			.then((response) => {
	// 				setData(response);
	// 			})
	// 			.catch((error) => {
	// 				console.log('error ' + error);
	// 			});
	// 	};
	// 	fetchData();
	// }, []);
	// console.log(data);

	return (
		<div className='testing-container'>
			<h5>Testing Centers</h5>
			<div className='testing'>
				{/* <div className='zip-code'>
					<input placeholder='Enter Zipcode' type='text' onChange={handleChange}/>
				</div>
				<div className='testing-map'>{data}</div> */}
				<h5>In Development</h5>
			</div>
		</div>
	);
};

export default TestingCenter;