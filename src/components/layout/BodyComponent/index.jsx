import React, {Component} from 'react';

import SideBarComponent from './SideBarComponent/index.jsx';
import MainBodyComponent from './MainBodyComponent/index.jsx';

class BodyComponent extends Component{

	render(){
		return(
			<div className="grid-no-space main-container">
				<SideBarComponent />
				<MainBodyComponent />
			</div>
		)
	}
}

export default BodyComponent;