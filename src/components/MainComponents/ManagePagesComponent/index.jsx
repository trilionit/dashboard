import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import AddNewPage from './AddNewPage/index.jsx';

class ManagePages extends Component{
	render(){
		return(
			<div>
				<div className="grid-center-container">
					<div className="grid-center">
						<div className="panel-container">
							<div className="panel-header text-center">
								<h1><i className="fa fa-file-text-o fa-4x"></i></h1>
							</div>
							<div className="panel-body text-center">
								<h2>Manage Your Pages</h2>
								<h3>You have not created any pages yet</h3>
								<span><button className="primary">Add Pages</button></span>
							</div>
						</div>
					</div>
				</div>	
				<Switch>
					<Route path="{`${match.path}/:name`}" children={AddNewPage} />
				</Switch>
			</div>
		)
	}
}

export default ManagePages;