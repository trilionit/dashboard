import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import AddNewPage from './AddNewPage/index.jsx';
import ManagePagesHome from './ManagePagesHome.jsx';

class ManagePages extends Component{
	render(){
		return(
			<Switch>
				<Route exact path="/pages" component={ManagePagesHome} />
				<Route exact path="/pages/add" component={AddNewPage} />
			</Switch>
		)
	}
}

export default ManagePages;