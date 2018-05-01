import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBarComponent extends Component{

	render(){
		return(
			<div className="grid-15">
				<div className="side-bar">
					<div className="side-bar-header">
						<h3><i className="fa fa-file-text"></i> Dasboard UIs</h3>
					</div>
					<div className="side-nav-bar">
						<span>
							<h3>Site Pages</h3>
							<ul>
								<li><Link to="/login"><i className="fa fa-lock"></i>Login/Sign Up</Link></li>
								<li><Link to="site/dashboard"><i className="fa fa-file-text-o"></i>Dashboard Home</Link></li>
								<li><Link to="site/pages"><i className="fa fa-columns"></i>Inner Pages</Link></li>
								<li><Link to="site/insights"><i className="fa fa-bar-chart"></i>Insights</Link></li>
							</ul>
						</span>
						<span>
							<h3>CSS Essentials</h3>
							<ul>
								<li><Link to="site/grid"><i className="fa fa-th"></i>Grid System</Link></li>
								<li><Link to="site/forms"><i className="fa fa-address-book-o"></i>Forms</Link></li>
								<li><Link to="site/buttons"><i className="fa fa-mouse-pointer-o"></i>Buttons</Link></li>
								<li><Link to="site/panels"><i className="fa fa-file-text"></i>Panels</Link></li>

							</ul>
						</span>
						<span>
							<h3>Media</h3>
							<ul>
								<li><Link to="/media"><i className="fa fa-camera"></i>Upload</Link></li>
								
							</ul>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default SideBarComponent;