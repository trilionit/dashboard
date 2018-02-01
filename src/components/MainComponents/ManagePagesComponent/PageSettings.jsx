import React, {Component} from 'react';


class PageSettings extends Component{
	render(){
		return(
			<div className="settings">
				<div className="header">
					<h3>Add Pages</h3>
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
								<button className="btn btn-primary">Add</button>
							</div>
						</div>
					</form>
				</div>
			</div>					
		)
	}
}

export default PageSettings;