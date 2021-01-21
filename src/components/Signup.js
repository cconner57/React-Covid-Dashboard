import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Signup = () => {
	let history = useHistory();
	const [form, setForm] = useState({
		email: '',
		password: '',
		password2: '',
	});
	const { register, handleSubmit, errors, watch } = useForm();

	const password = useRef({});
	password.current = watch('password', '');

	const handleForm = async () => {
		try {
			const response = await axios.post('http://localhost:5000/signup', {
				email: form.email,
				password: form.password,
			});
			sessionStorage.setItem('loggedIn', true);
			console.log(response);
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div className='login-background'>
			<div className='login-container'>
				<div className='Login__Greeting'>
					<h4>Welcome,</h4>
					<p>Sign up to continue</p>
				</div>
				<form
					className='Login__Form'
					onSubmit={(e) => e.preventDefault()}
					autoComplete='on'>
					<label htmlFor='email' className='Login__Label'>
						Email
					</label>
					<input
						id='email'
						type='email'
						name='email'
						className='Login__Input'
						ref={register({
							required: true,
							pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<p>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
						onChange={handleChange}
					/>
					{errors.email && <p className='Error'>• Email must be valid</p>}
					<label htmlFor='password' className='Login__Label'>
						Password:
					</label>
					<input
						id='password'
						className='Login__Input'
						type='password'
						name='password'
						ref={register({
							required: '• You must specify a password',
							minLength: {
								value: 8,
								message: '• Password must have at least 8 characters',
							},
						})}
						onChange={handleChange}
					/>
					{errors.password && (
						<p className='Error'>{errors.password.message}</p>
					)}
					<label htmlFor='password2' className='Login__Label'>
						Verify Password:
					</label>
					<input
						id='password2'
						className='Login__Input'
						type='password'
						name='password_repeat'
						ref={register({
							validate: (value) =>
								value === password.current || '• Passwords do not match',
						})}
						onChange={handleChange}
					/>
					{errors.password_repeat && (
						<p className='Error'>{errors.password_repeat.message}</p>
					)}
					<button
						type='submit'
						className='Login__Submit'
						onClick={handleSubmit(handleForm)}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
