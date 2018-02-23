 import React, {Component} from 'react';

class Forms extends Component{

	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Forms</h3>
					</div>
					<div className="grid-container">
						<div className="grid-2">
							<div className="panel">
								<div className="panel-body">
									<legend>Regular Form Elements</legend>
									<div className="input-field">
										<label htmlFor="text-field">Text Field</label>
										<input type="text" name="text-field" className="input" />
									</div>
									<div className="input-field">
										<label htmlFor="email-field">Email Field</label>
										<input type="text" name="email-field" className="input" />
									</div>
									<div className="input-field">
										<label htmlFor="email-field">Select</label>
										<select className="input">
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
										</select>
									</div>
									<div className="input-field">
										<label htmlFor="textarea-field">TextArea</label>
										<textarea className="text-area"></textarea>
									</div>

								</div>
							</div>
						</div>
						<div className="grid-2">
							<div className="panel">
								<div className="panel-body">
									<legend>Validated Form Elements</legend>
									<div class="alert-container alert-error">
										<strong>Something Wrong !</strong> Check and try again
									</div>
									<div className="input-field">
										<label htmlFor="text-field">Text Field</label>
										<input type="text" name="input-error" className="input-error" />
									</div>
									<div className="input-field">
										<label htmlFor="email-field">Email Field</label>
										<input type="text" name="email-field" className="input" />
									</div>
									<div className="input-field">
										<label htmlFor="email-field">Select</label>
										<select className="input">
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
										</select>
									</div>
									<div className="input-field">
										<label htmlFor="textarea-field">TextArea</label>
										<textarea className="text-area"></textarea>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Forms;