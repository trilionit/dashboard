 import React, {Component} from 'react';

class Media extends Component{

	handleDrop(e){
		console.log(e);
	}
	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Media</h3>
					</div>
					<div className="grid-container">
						<div className="grid-1">
							<div className="panel-container  border-thin">
								<div className="panel-header">Multi-File Upload- Drag and drop</div>
								<div className="panel-body">
									<div className="form-upload-box">
										Drop Files Here
									</div>
								</div>
							</div>

							<div className="panel-container  border-thin">
								<div className="panel-header">Multi-File Upload- Drag and drop</div>
								<div className="panel-body">
									<div className="file-upload-box">
										<input
											type="file" 
											name="file[]" 
											id="file" 
											class="inputfile 
											inputfile" 
											data-multiple-caption="{count} 
											files selected" multiple 
										/>
										<label for="file">
											<i className="fa fa-upload"></i>
											Choose a file
										</label>
									</div>
								</div>
							</div>
							<div className="panel-container  border-thin">
								<div className="panel-header">Multi-File Upload- Drag and drop</div>
								<div className="panel-body">
									<div className="file-upload-box">
										<input
											type="file"
										/>
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

export default Media;