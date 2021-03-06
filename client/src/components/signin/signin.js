
import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import './signin.css'

const styles = {
	formDiv: {
		border: '1px solid #31ace0',
		width: '300px',
		height: '350px',
		background: '#b5e4f8'
	},
	formGroup: {
		padding: "10px"
	},
	label: {
		margin: "0px 5px 0px 0px"
	}
};

class SignIn extends Component {


	constructor(props) {
		super(props);

		// initial state in forms set to blank
		this.state = {
			emailInput: "",
			passwordInput:  ""
		};

		// This binding is necessary to make `this` work in the callback
		this.handleSubmit = this.handleSubmit.bind(this);

		this.handleEmailChange = this.handleEmailChange.bind(this);

		this.handlePasswordChange = this.handlePasswordChange.bind(this);


	}


	handleEmailChange(event) {
		this.setState({
			emailInput: event.target.value
		});
	}

	handlePasswordChange(event) {
		this.setState({
			passwordInput: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		// console.log("Here is THIS",this)
		// console.log("Here is submit",event.target.submit.value)

		// var email = event.target.emailInput.value;
		// var password = event.target.passwordInput.value;

		var email = this.state.emailInput;
		var password = this.state.passwordInput;


		console.log("email:", email, typeof email)
		console.log("password:", password, typeof password)


		function logInAttempt(query) {
			return axios.post(window.location.href + "auth/signin", {

				"email": email,
				"password": password

			}).then(function (response) {
				console.log("response received!")
				console.log(response);
				if (response.data.signedIn == "true") {
					console.log("this should be rerouting now")
					window.location.href = window.location.href + 'select_path'
				} else{
					window.location.href = window.location.href
				}

			})

		} return logInAttempt()

	}







	render() {
		return (
			<div className="formDiv card" style={styles.formDiv}>
				<form onSubmit={this.handleSubmit}>
					
					<span id="logoSpan"><img src="./logo.png" width="200px" height="75px" alt="bright kids logo" /></span>

					<h3 className="text-center">Sign In</h3>
					<div className="form-group" style={styles.formGroup}>
						<label htmlFor="emailInput" style={styles.label}>Email address:</label>
						<input type="email" className="form-control" name="emailInput" placeholder="name@example.com" value={this.state.value} onChange={this.handleEmailChange} />
					</div>

					<div className="form-group" style={styles.formGroup}>
						<label htmlFor="inputPassword" style={styles.label}>Password:</label>
						<input type="password" className="form-control" name="passwordInput" placeholder="password" value={this.state.value} onChange={this.handlePasswordChange} />
					</div>

					<input type="submit" value="Submit" onClick={this.handleSubmit} />

				</form>
			</div>
		)
	}


}


export default SignIn;