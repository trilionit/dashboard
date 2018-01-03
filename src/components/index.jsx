import React, {Component} from 'react';

import HeaderComponent from './HeaderComponent/index.jsx';
import InsightsComponent  from './InsightsComponent/index.jsx';

require('../scss/HeaderComponent.scss');
require('../scss/insightsComponent.scss');
require('../scss/layout.scss');


class Layout extends Component{
	render(){
		return(
			<div>
				<HeaderComponent />
				<InsightsComponent />
			</div>		
		)
	}
}

export default Layout;