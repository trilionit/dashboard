import React, {Component} from 'react';

class NavComponent extends Component{
	render(){
		return(
			<nav>
				<div className="container">
					<div className="nav-left">
						<ul>
							<li><a href=""><i class="fa fa-area-chart fa-1x"></i> Dashboard</a></li>
							<li><a href=""><i class="fa fa-comments fa-1x"></i> Feedback</a></li>
							<li><a href=""><i class="fa fa-camera fa-1x"></i> Gallery</a></li>
							<li><a href=""><i class="fa fa-money fa-1x"></i> Donations</a></li>
							<li><a href=""><i class="fa fa-credit-card fa-1x"></i> Invoicing</a></li>
							<li><a href=""><i class="fa fa-bed fa-1x" aria-hidden="true"></i> Reservations</a></li>
							<li class="active"><a href="accounts.html"><i class="fa fa-address-card"></i>
							Accounts</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavComponent;