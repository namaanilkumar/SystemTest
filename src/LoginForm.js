import React, {useState} from "react";
import './LoginForm.css';

const LoginForm = (props) => {
    
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

	const handleSubmit = (event) =>{
		event.preventDefault();
		props.onSubmit({
			login,
			password
		});
        setLogin('');
        setPassword('');
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" value={login} onChange={handleLoginChange} />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" value={password} onChange={handlePasswordChange} />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}
export default LoginForm;