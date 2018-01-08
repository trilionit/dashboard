import React, {Component} from 'react';

class NoMatch extends Component{
	render(){
		return(
			<div className="grid-1">
				<div className="page-header">
					<h1>404</h1>
					<span>
						The Page you are requesting does not exist at this time.
					</span>
				</div>
			</div>	
		)
	}
}

export default NoMatch;