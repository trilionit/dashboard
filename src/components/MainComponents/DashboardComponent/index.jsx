import React, {Component} from 'react';

import InsightsComponent from './InsightsComponent/index.jsx';

class DashBoard extends Component{
	
	render(){
		return(
			<div>			
				<div className="grid-1">
					<div className="page-header">
						<h2>Dashboard</h2>
					</div>
				</div>
				<InsightsComponent />
			</div>
		)
	}
}

export default DashBoard;