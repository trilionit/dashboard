import React, {Component} from 'react';

import ContentComponent from './contentComponent/index.jsx';
import InsightsComponent from './insightsComponent/index.jsx';
import LineChartComponent from './lineChartComponent/index.jsx';
import DoughnutComponent from './doughnutComponent/index.jsx';
import PagesComponent from './pagesComponent/index.jsx';
import UsersComponent from './usersComponent/index.jsx';

class Dashboard extends Component{

	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Dashboard</h3>
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
					<div className="grid-container fixed-height">
						<div className="grid-3">
							<UsersComponent />
						</div>

						<div className="grid-3">
							<PagesComponent />
						</div>

						<div className="grid-3">
							<ContentComponent />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard;