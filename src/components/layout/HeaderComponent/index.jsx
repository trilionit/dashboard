import React, {Component} from 'react';
//import {link} from 'react-router-dom';
class HeaderComponent extends Component{

	render(){
		return(
			<header>
				<div className="logo-container">
					<a href="/">
						<i className="fa fa-spinner"></i>
						<span>Trilion</span>
					</a>
				</div>
				<div className="header-nav-right">
					<ul className="clearfix">
						<li>
							<a href=""><i className="fa fa-user fa-2x"></i><span></span></a>						
						</li>
						<li>
							<a href=""><i className="fa fa-bell-o fa-2x"></i></a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}

export default HeaderComponent;