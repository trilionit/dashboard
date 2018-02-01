import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EditPage extends Component {
	
	render(){

		return(
			<div className="grid-1">
				<div className="header">
					<h3>Edit Page</h3>
				</div>
				<form>
					<div className="form-container">
						<div className="input-element">
							<label htmlFor="title" className="form-label">Page Name</label>
							<input type="text" name="title" className="input-text" value="home" />
						</div>

						<div className="message-element">
							<label htmlFor="title">Page Description (Optional)</label>
							<textarea>
								Some Description
							</textarea>
						</div>

						<div className="input-element">
							<button className="btn btn-primary">Edit</button>
						</div>

					</div>
				</form>
			</div>
		)
	}
}

export default EditPage;

