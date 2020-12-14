import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Timeline from './components/Timeline';
import News from './components/News'
import Testing from './components/TestingCenter'
import Contact from './components/Contact'
import Settings from './components/Settings'
import './App.scss';

function App() {
	return (
		<Router>
			<div className='app-container'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/timeline' component={Timeline} />
					<Route path='/news' component={News} />
					<Route path='/testing' component={Testing} />
					<Route path='/contact' component={Contact} />
					<Route path='/settings' component={Settings} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
