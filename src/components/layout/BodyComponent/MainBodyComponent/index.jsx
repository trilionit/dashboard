import React, {Component} from 'react';

import NavBarComponent from './NavBarComponent/index.jsx';
import MainUiComponent from './MainUiComponent/index.jsx';
import FooterComponent from './FooterComponent/index.jsx';

class MainBodyComponent extends Component{

	render(){
		return(
			<div className="grid-85">
				<div className="grid-container">
					<div className="grid-1">
						<NavBarComponent />
					</div>

					<div className="grid-1">
						<MainUiComponent />
					</div>
					<div className="grid-1">
						<FooterComponent />
					</div>
				</div>
			</div>
		)
	}
}

export default MainBodyComponent;