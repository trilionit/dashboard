 import React, {Component} from 'react';

class Gallery extends Component{

	render(){
		return(
			<div className="grid-1">
				<div className="container">
					<div className="page-header">
						<h3>Gallery</h3>
					</div>
					<div className="grid-container">
						<div className="grid-1">
							<div className="btn-container">
								<button className="btn default">Default</button>
							</div>
							<div className="btn-container">
								<button className="btn primary">Primary</button>
							</div>
							<div className="btn-container">
								<button className="btn danger">Danger</button>
							</div>

							<div className="btn-container">
								<button className="btn secondary">Secondary</button>
							</div>

							<div className="btn-container">
								<button className="btn warning">Warning</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Gallery;