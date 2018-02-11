import React, {Component} from 'react';

class UsersComponent extends Component{

	render(){
		return(
			<div className="panel-container">
				<div className="panel-header-secondary">Users</div>
				<div className="panel-body">
					<div className="message-container">
						<div className="display-icon">
							<i class="fa fa-user fa-2x"></i>
						</div>
						<div className="display-message">
							<h5>Last Seen: 11:20 am</h5>							
							<h3>Prince Osei-Akyeampong</h3>
							Super Admin
						</div>
					</div>

					<div className="message-container">
						<div className="display-icon">
							<i class="fa fa-user fa-2x"></i>
						</div>
						<div className="display-message">
							<h5>Last Seen: yesterday at 11:20 am</h5>							
							<h3>Mavis Veestak</h3>
							Moderator
						</div>
					</div>

					<div className="message-container">
						<div className="display-icon">
							<i class="fa fa-user fa-2x"></i>
						</div>
						<div className="display-message">
							<h5>Last Seen: 11:20 am</h5>							
							<h3>Amisha Loshanth</h3>
							Developer
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default UsersComponent;