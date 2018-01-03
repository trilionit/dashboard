import React, {Component} from 'react';
import TopRightNav from './TopRightNav.jsx';

class LogoContainer extends Component{
	render() {
		return (
			<div className="logo-container">
				<a href="/">
					<i className="fa fa-spinner"></i>
					<span>Trilion</span>
				</a>
			</div>
		)
	}
}

export default LogoContainer;
