import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChartComponent extends Component {

constructor(props){
	super(props)
	this.state= {
		chartData : {
			labels: ["November", "December", "January", "February"],
			 datasets: [
				{
					label: 'My First dataset',
					fill: true,
					lineTension: 0.1,
					backgroundColor: 'rgba(75,192,192,0.4)',
					borderColor: 'rgba(75,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [65, 59, 80, 81]
			    }
			]
		}
	}

}

	render(){
		return(					
			<div className="panel-container">
				<div className="panel-header-secondary">User Stats - Line Chart</div>
				<div className="panel-body">
					<Line data={this.state.chartData} />
				</div>
			</div>
		)
	}
}

export default LineChartComponent;