 import React, {Component} from 'react';

class Grid extends Component{

	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Grid System</h3>
					</div>
					<div className="grid-container">
						<div className="grid-1 border-thin">
							GRID 1
						</div>

						<div className="grid-2 border-thin">
							GRID 2
						</div>
						<div className="grid-2 border-thin">
							GRID 2
						</div>

						<div className="grid-3 border-thin">
							GRID 3
						</div>
						<div className="grid-3 border-thin">
							GRID 3
						</div>
						<div className="grid-3 border-thin">
							GRID 3
						</div>

						<div className="grid-4 border-thin">
							GRID 4
						</div>
						<div className="grid-4 border-thin">
							GRID 4
						</div>
						<div className="grid-4 border-thin">
							GRID 4
						</div>
						<div className="grid-4 border-thin">
							GRID 4
						</div>

						<div className="grid-10 border-thin">
							GRID 10%
						</div>

						<div className="grid-30 border-thin">
							GRID 30%
						</div>

						<div className="grid-70 border-thin">
							GRID 70%
						</div>

						<div className="grid-90 border-thin">
							GRID 90%
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default Grid;