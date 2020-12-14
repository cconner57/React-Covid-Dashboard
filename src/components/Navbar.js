import React from 'react';
import { NavLink } from 'react-router-dom';
import SettingsWidget from './SettingsWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartBar,
	faCalendarAlt,
	faNewspaper,
	faMedkit,
	faPaperPlane,
	faTools,
} from '@fortawesome/free-solid-svg-icons';

const navStyle = {
	color: '#156eff',
	fontWeight: 'bold',
};

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<h5>Overview</h5>
				<NavLink to='/' exact className='icon' activeStyle={navStyle}>
					<FontAwesomeIcon icon={faChartBar} />
					<p>Statistics</p>
				</NavLink>
				<NavLink to='/timeline' className='icon' activeStyle={navStyle}>
					<FontAwesomeIcon icon={faCalendarAlt} />
					<p>Timeline</p>
				</NavLink>
				<NavLink to='/news' disabled className='icon' activeStyle={navStyle}>
					<FontAwesomeIcon icon={faNewspaper} />
					<p>News</p>
				</NavLink>
				<NavLink to='/testing' className='icon' activeStyle={navStyle}>
					<FontAwesomeIcon icon={faMedkit} />
					<p>Testing Centers</p>
				</NavLink>
				<h5>Support</h5>
				<NavLink to='/contact' className='icon' activeStyle={navStyle}>
					<FontAwesomeIcon icon={faPaperPlane} />
					<p>Contact</p>
				</NavLink>
				<NavLink to='/settings' className='icon' activeStyle={navStyle}>
					<FontAwesomeIcon icon={faTools} />
					<p>Settings</p>
				</NavLink>
			</div>
			<SettingsWidget />
		</div>
	);
};

export default Navbar;
