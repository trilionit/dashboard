import React, {Component} from 'react';

import PageListComponent from './AddNewPage/index.jsx';
import PageSettings from './PageSettings.jsx';


class ManagePages extends Component{
	
	render(){
		
		return(
			<div className="grid-container">
				<div className="grid-70 secondary-background">
					<PageListComponent />
				</div>
				<div className="grid-30 secondary-background">
					<PageSettings />
				</div>
			</div>
		)
	}
}

export default ManagePages;