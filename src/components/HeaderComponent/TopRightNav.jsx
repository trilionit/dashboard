import React, {Component} from 'react';

class TopRightNav extends Component{
	render(){
		return(
			<div className="top-right-nav-container">
				<ul className="clearfix">
					<li>
						<a href=""><i className="fa fa-user fa-2x"></i><span></span></a>						
					</li>
					<li>
						<a href=""><i className="fa fa-bell-o fa-2x"></i></a>
					</li>
				</ul>
			</div>
		)
	}
}

export default TopRightNav;