import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
	const [form, setForm] = useState({ option: '', title: '', description: '' });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector('.contact').style.display = 'none';
		document.querySelector('.submitted').style.display = 'block';
	};

	return (
		<div className='contact-container'>
			<h5>Contact</h5>
			<div className='contact'>
				<h5>Report a bug or request a feature</h5>
				<form className='contact-form' onSubmit={handleSubmit}>
					<div className='form-select'>
						<span>I would like to </span>
						<select name='option' required onChange={handleChange}>
							<option value='' defaultValue data-default>
								Select an option
							</option>
							<option value='bug'>report a bug</option>
							<option value='feature'>request a feature</option>
						</select>
					</div>
					<div className='form-title'>
						<label htmlFor=''>Title</label>
						<input
							type='text'
							placeholder='Enter a title'
							name='title'
							required
							onChange={handleChange}
						/>
					</div>
					<div className='form-description'>
						<label htmlFor=''>Description</label>
						<textarea
							name='description'
							placeholder='Enter a description'
							required
							onChange={handleChange}></textarea>
					</div>

					<input type='submit' value='Submit' />
				</form>
			</div>
			<div className='submitted'>
				<div>
					<FontAwesomeIcon icon={faCheck} size='4x' />
				</div>
				<h5>
					Thank you for{' '}
					{form.option === 'bug'
						? "reporting the bug. It's very helpful for us!"
						: 'requesting the feature!'}
				</h5>
			</div>
		</div>
	);
};

export default Contact;
