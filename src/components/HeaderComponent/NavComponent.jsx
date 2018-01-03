import React, {Component} from 'react';

class NavComponent extends Component{
	render(){
		return(
			<nav>				
				<div className="nav-left">
					<ul>
						<li><a href="/"><i class="fa fa-area-chart fa-1x"></i> Dashboard</a></li>
						<li><a href="/feedback"><i class="fa fa-comments fa-1x"></i> Feedback</a></li>
						<li><a href="/gallery"><i class="fa fa-camera fa-1x"></i> Gallery</a></li>
						<li><a href="/pages"><i class="fa fa-file-text fa-1x"></i> Pages</a></li>
					</ul>
				</div>

				<div className="nav-right">
					<ul>
						<li><a href=""><i class="fa fa-users fa-1x"></i> Users</a></li>
						<li><a href=""><i class="fa fa-cog fa-1x"></i> Settings</a></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default NavComponent;