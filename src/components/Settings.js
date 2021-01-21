import React from 'react';

const Settings = () => {
	return (
		<div className='settings-container'>
			<h5>Settings</h5>
			<div className='settings'>
				{/* <div className='dark-mode'>
					<p>Dark mode</p>
					<input disabled type='checkbox' id='switch' />
					<label htmlFor='switch'></label>
				</div> */}
				{/* <hr /> */}
				<div className='apis'>
					<h5>APIs used for this site</h5>
					<ul>
						<li>
							World Widget information gathered from <b>covid19api.com</b>
						</li>
						<li>
							Statistics gathered from <b>covidtracking.com</b>
						</li>
						{/* <li>
							News Articles gathered from <b>newsapi.org</b>
						</li>
						<li>
							Testing Center information gathered from <b>yelp.com</b>
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Settings;
