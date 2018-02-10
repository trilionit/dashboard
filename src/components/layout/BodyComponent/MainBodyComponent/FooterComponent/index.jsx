import React, {Component} from 'react';

const yearToDate= new Date().getFullYear();
//const yearToDate = newDate

class FooterComponent extends Component{

	render(){
		return(
			<div className="container">
				<footer>
					<div className="footer-left">
						<ul>
							<li><a href="/about">About TrilionAdmin</a></li>
							<li><a href="/privacy">Privacy</a></li>
						</ul>
					</div>
					<div className="footer-right">
						Copyright &copy; 2017 - {yearToDate}. Open Source Project
					</div>
				</footer>
			</div>
		)
	}
}

export default FooterComponent;