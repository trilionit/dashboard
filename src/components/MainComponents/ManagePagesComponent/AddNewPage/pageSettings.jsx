import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import AddNewPage from './AddNewPage/index.jsx';
import ManagePagesHome from './ManagePagesHome.jsx';

class ManagePages extends Component{
	render(){
		return(
			<Switch>
				<Route exact path="/pages" component={ManagePagesHome} />
				<Route exact path="/pages/add" component={AddNewPage} />
			</Switch>
		)
	}
}

export default ManagePages;

class AddNewPage extends Component{
	render(){
		return(
		<div className="grid-container">
			<div className="grid-70 secondary-background">
				<div className="panel-container">
					<div className="panel-header text-center">
						<h1><i className="fa fa-file-text-o fa-4x"></i></h1>
					</div>
					<div className="panel-body text-center">
						<h2>Manage Your Pages</h2>
						<h3>You have not created any pages yet</h3>
						
					</div>
				</div>
			</div>
			<div className="grid-30 secondary-background">
				<div className="settings">
					<div className="header">
						<h3>Page Settings</h3>
					</div>
					<div className="grid-1">
						<form>
							<div className="form-container">
								<div className="input-element">
									<label htmlFor="title" className="form-label">Page Name</label>
									<input type="text" name="title" className="input-text" />
								</div>

								<div className="message-element">
									<label htmlFor="title">Page Description (Optional)</label>
									<textarea></textarea>
								</div>

								<div className="input-element">
									<button className="btn btn-primary">Submit</button>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
		</div>					
		)
	}
}

export default AddNewPage;