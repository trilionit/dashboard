import React, {Component} from 'react';

import InsightsComponent from './insightsComponent/index.jsx';
import LineChartComponent from './lineChartComponent/index.jsx';
import DoughnutComponent from './doughnutComponent/index.jsx';

class Insights extends Component{

	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Insights</h3>
					</div>
					<InsightsComponent />
					<div className="create-space"></div>
					<div className="grid-container">
						<div className="grid-60">
							<LineChartComponent />
						</div>

						<div className="grid-40">
							<DoughnutComponent />
						</div>
					</div>
					<div className="create-space"></div>
				</div>
			</div>
		)
	}
}

export default Insights;