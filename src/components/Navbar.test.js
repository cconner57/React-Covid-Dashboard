import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('Menu Tests', () => {
	it('renders without crashing', () => {
		render(
			<MemoryRouter>
				<NavBar />
			</MemoryRouter>
		);
	});
});
