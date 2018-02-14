import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class DoughnutComponent extends Component {

constructor(props){
	super(props)
	this.state= {
		chartData : {
			labels: ["Perfumes", "Watches", "Clothing"],
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
				],
				hoverBackgroundColor: [
					'#FF6384',
					'#36A2EB',
					'#FFCE56'
				]
			}]
		}
	}

}

	render(){
		return(					
			<div className="panel-container">
				<div className="panel-header-secondary">Best Sellers - Doughnut Chart</div>
				<div className="panel-body fixed-height">
					<Doughnut data={this.state.chartData} height={230}  />
				</div>
			</div>
		)
	}
}

export default DoughnutComponent;