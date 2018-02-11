import React, {Component} from 'react';

class PagesComponent extends Component{

	render(){
		return(
			<div className="panel-container">
				<div className="panel-header-secondary">Manage Pages</div>
				<div className="panel-body">
					<div className="manage-pages-container">						
						<div className="display-icons">
							<div className="list-icon blue-bg">H</div>
						</div>
						<div className="display-pages">
							<h3>Home/Index</h3>
							<h5>click to manage this page</h5>
							<span>Manage</span>
						</div>						
					</div>

					<div className="manage-pages-container">						
						<div className="display-icons">
							<div className="list-icon green-bg">A</div>
						</div>
						<div className="display-pages">
							<h3>About</h3>
							<h5>click to manage this page</h5>
							<span>Manage</span>
						</div>						
					</div>

					<div className="manage-pages-container">						
						<div className="display-icons">
							<div className="list-icon red-bg">S</div>
						</div>
						<div className="display-pages">
							<h3>Services</h3>
							<h5>click to manage this page</h5>
							<span>Manage</span>
						</div>						
					</div>

					<div className="manage-pages-container">						
						<div className="display-icons">
							<div className="list-icon blue-bg">C</div>
						</div>
						<div className="display-pages">
							<h3>Contact</h3>
							<h5>click to manage this page</h5>
							<span>Manage</span>
						</div>						
					</div>

					<div className="manage-pages-container">						
						<div className="display-icons">
							<div className="list-icon green-bg">H</div>
						</div>
						<div className="display-pages">
							<h3>Home/Index</h3>
							<h5>click to manage this page</h5>
							<span>Manage</span>
						</div>						
					</div>
				</div>
			</div>
		)
	}
}

export default PagesComponent;