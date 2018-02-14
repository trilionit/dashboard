 import React, {Component} from 'react';

class InsightsComponent extends Component{

	render(){
		return(
		
		<div className="grid-container">

			<div className="grid-4">
				<div className="panel-container-with-icons">
					<div className="panel-with-icons">
						<div className="display-icons">
							<i className="fa fa-bar-chart"></i>
						</div>
						<div className="panel-body-header text-align-right">
							<h2>Today's Visits</h2>
							<h3>123</h3>
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

			<div className="grid-4">
				<div className="panel-container-with-icons">
					<div className="panel-with-icons">
						<div className="display-icons">
							<i className="fa fa-line-chart "></i>
						</div>
						<div className="panel-body-header text-align-right">
							<h2>This Week's</h2>
							<h3>456,789</h3>
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

			<div className="grid-4">
				<div className="panel-container-with-icons">
					<div className="panel-with-icons">
						<div className="display-icons">
							<i className="fa fa-file-text"></i>
						</div>
						<div className="panel-body-header text-align-right">
							<h2>This Month's</h2>
							<h3>1,234,567</h3>
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

			<div className="grid-4">
				<div className="panel-container-with-icons">
					<div className="panel-with-icons">
						<div className="display-icons">
							<i className="fa fa-file-text"></i>
						</div>
						<div className="panel-body-header text-align-right">
							<h2>This Year's</h2>
							<h3>1,234,567,890</h3>
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
		</div>
		)
	}
}

export default InsightsComponent;