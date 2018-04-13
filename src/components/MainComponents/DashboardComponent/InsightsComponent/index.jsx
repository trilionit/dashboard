import React, {Component} from 'react';

class InsightsComponent extends Component{
	render(){
		return(
			<div className="grid-container quick-stats-container">
				<div className="grid-3 stats-container">
					<div className="quick-icon">
						<i className="fa fa-line-chart"></i>
					</div>
					<div className="quick-text">
						<h2>Total Visits</h2>
						<h3>1200</h3>
					</div>
					<div className="quick-last-update-container">
						<i className="fa fa-cog fa-1x"></i> 
						Since yesterday
					</div>
				</div>

				<div className="grid-3 stats-container">
					<div className="quick-icon">
						<i className="fa fa-bar-chart"></i>
					</div>
					<div className="quick-text">
						<h2>Total Page Views</h2>
						<h3>5,025,720</h3>
					</div>
					<div className="quick-last-update-container">
						<i className="fa fa-cog fa-1x"></i> 
						Since yesterday
					</div>
				</div>

				<div className="grid-3 stats-container">
					<div className="quick-icon">
						<i className="fa fa-signal"></i>
					</div>
					<div className="quick-text">
						<h2>Total Unique Visitors</h2>
						<h3>5622</h3>
					</div>
					<div className="quick-last-update-container">
						<i className="fa fa-cog fa-1x"></i> 
						Since yesterday
					</div>
				</div>
			</div>
		)
	}
}

export default InsightsComponent;