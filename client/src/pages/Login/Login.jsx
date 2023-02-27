import "./Login.scss";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHeaderEffect as startHeaderEffect } from "./hackerEffect";
export default function Login() {
	startHeaderEffect();

	return (
		<div className="container">
			<div className="login-left">
				<div className="login-header">
					<h1 data-value="IMPROVEMENT" className="improvement">
						IMPROVEMENT
					</h1>

					<h1 data-value="CENTER" className="center">
						CENTER
					</h1>
					<p>
						Getting started is quick and simple, just fill out the info below!
					</p>
				</div>
				<form className="login-form">
					<div className="login-form-content">
						<div className="form-item login">
							<label>Enter Email</label>
							<input type="text" id="email" autoFocus />
						</div>
						<div className="form-item password">
							<label>Enter Password</label>
							<input type="password" id="password" />
							<div className="checkbox">
								<input type="checkbox" id="rememberMeCheckbox" />
								<label htmlFor="rememberMeCheckbox" className="checkboxLabel">
									Remember Me
								</label>
							</div>
						</div>
						<div className="buttons">
							<div className="line"></div>
							<button type="submit" className="submit-btn">
								Sign In
							</button>
							<button className="create-account-btn">
								<Link to="/register" className="create-account-href">
									Create Account
								</Link>
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="login-right">
				<img src="images/login-img.png" />
			</div>
		</div>
	);
}
