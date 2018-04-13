import React, {Component} from 'react';

class NavComponent extends Component{
	render(){
		return(
			<nav>				
				<div className="nav-left">
					<ul>
						<li><a href="/"><i className="fa fa-area-chart fa-1x"></i> Dashboard</a></li>
						<li><a href="/feedback"><i className="fa fa-comments fa-1x"></i> Feedback</a></li>
						<li><a href="/gallery"><i className="fa fa-camera fa-1x"></i> Gallery</a></li>
						<li><a href="/pages"><i className="fa fa-file-text fa-1x"></i> Pages</a></li>
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

export default NavComponent;