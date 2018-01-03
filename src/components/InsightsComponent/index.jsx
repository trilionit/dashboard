import React, {Component} from 'react';

class InsightsComponent extends Component{
	render(){
		return(
			<section className="insights-container">
				<div className="container">
					<div className="page-header">
						<h2>Dashboard</h2>
					</div>
					<div className="grid-container quick-stats-container">
						<div className="grid-3 stats-container">
							<div className="quick-icon">
								<i className="fa fa-line-chart"></i>
							</div>
							<div className="quick-text">
								<h2>Total Visits</h2>
								<h3>1200</h3>
							</div>
							<div class="quick-last-update-container">
								<i class="fa fa-cog fa-1x"></i> 
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
							<div class="quick-last-update-container">
								<i class="fa fa-cog fa-1x"></i> 
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
							<div class="quick-last-update-container">
								<i class="fa fa-cog fa-1x"></i> 
								Since yesterday
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default InsightsComponent;