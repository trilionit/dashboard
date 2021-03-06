import React, {Component} from 'react';

class NavBarComponent extends Component{

	render(){
		return(
			<nav>
				<div className="nav-left">
					<ul>
						<li><a href="/"><i className="fa fa-area-chart fa-1x"></i> Dashboard</a></li>
						<li><a href="site/feedback"><i className="fa fa-comments fa-1x"></i> Feedback</a></li>
						<li><a href="site/gallery"><i className="fa fa-camera fa-1x"></i> Gallery</a></li>
						<li><a href="site/pages"><i className="fa fa-file-text fa-1x"></i> Pages</a></li>
						<li><a href="/logout"><i className="fa fa-file-text fa-1x"></i> Logout</a></li>
					</ul>
				</div>

				<div className="nav-right">
					<ul>
						<li><a href=""><i className="fa fa-users fa-1x"></i> Users</a></li>
						<li><a href=""><i className="fa fa-cog fa-1x"></i> Settings</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavBarComponent;