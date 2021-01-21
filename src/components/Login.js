import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Login = () => {
	let history = useHistory();
	const [form, setForm] = useState({ email: '', password: '' });
	const [error, setError] = useState(null)

	const { register, handleSubmit, errors } = useForm();

	const handleForm = async () => {
		try {
			const response = await axios.post('https://covid-dashboard3.herokuapp.com/', {
				email: form.email.toLowerCase(),
				password: form.password,
			});
			sessionStorage.setItem('loggedIn', true);
			console.log(response);
			history.push('/');
		} catch (error) {
			setError('• Could not sign in')
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
					<p>Sign in to continue</p>
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
						Password
					</label>
					<input
						id='password'
						type='password'
						name='password'
						className='Login__Input'
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
					{error && (
						<p className='Error'>{error}</p>
					)}
					<button
						type='submit'
						className='Login__Submit'
						onClick={handleSubmit(handleForm)}>
						Submit
					</button>
				</form>
				<Link className='Signup__Link' to='/signup'>Sign up</Link>
			</div>
		</div>
	);
};

export default Login;
