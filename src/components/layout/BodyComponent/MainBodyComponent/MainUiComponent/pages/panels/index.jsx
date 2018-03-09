 import React, {Component} from 'react';

class Panels extends Component{

	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Panels</h3>
					</div>
					<div className="grid-container">
						<div className="grid-2">
							<div className="panel-container">
								<div className="panel-header">Header 1</div>
								<div className="panel-body">
									<p>Panel body shows here  Lorem ipsum dolor sit amet, consectetur 
									adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout</p>
								</div>
							</div>
						</div>
						<div className="grid-2">
							<div className="panel-container">
								<div className="panel-header-secondary">Header 2 with longer text</div>
								<div className="panel-body">
									<p>Panel body shows here  Lorem ipsum dolor sit amet, consectetur 
									adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout</p>
								</div>
							</div>
						</div>
					</div>

					<div className="page-header">
						<h3>Panels with icons</h3>
					</div>
					<div className="grid-container">
						<div className="grid-3">
							<div className="panel-container">
								<div className="panel-body">
									<p>Panel body shows here  Lorem ipsum dolor sit amet, consectetur 
									adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout</p>
								</div>
								<div className="panel-footer">
									panel-footer
								</div>
							</div>
						</div>	

						<div className="grid-3">
							<div className="panel-container-with-icons">
								<div className="panel-with-icons">
									<div className="display-icons">
										<i className="fa fa-file-text"></i>
									</div>
									<div className="panel-body-header text-align-right">
										<h2>Basic Use</h2>
										<h3>DesignByPrince.com</h3>
									</div>
								</div>
								<div className="panel-with-icons-footer">
									<div className="display-icons">
										<i className="fa fa-cog fa-1x"></i> 
									</div>
									Active since: August 07, 2017
								</div>
							</div>
						</div>	

						<div className="grid-3">
							<div className="panel-container">
								<div className="panel-header-secondary">
									Panel with Header, Body and Footer
								</div>
								<div className="panel-body">
									<p>Panel body shows here  Lorem ipsum dolor sit amet, consectetur 
									adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
									<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout</p>
								</div>
								<div className="panel-footer">
									panel-footer
								</div>
							</div>
						</div>	
					</div>


				</div>
			</div>
		)
	}
}

export default Panels;