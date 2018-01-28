import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import PageListComponent from './AddNewPage/index.jsx';


class ManagePages extends Component{
	
	render(){
		
		return(
			<div className="grid-container">
				<div className="grid-70 secondary-background">
					<PageListComponent />
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

export default ManagePages;