import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import SideBarComponent from './SideBarComponent/index.jsx';
import DashBoard from './DashboardComponent/index.jsx';
import ManagePages from './ManagePagesComponent/index.jsx';
import NoMatch from './404.jsx';
class MainComponents extends Component{
	render(){
		return(
			<section className="main-container">
				<SideBarComponent />
				<div className="pages-container">
					<Switch>			
						<Route exact path="/" component={DashBoard} />
						<Route path="/pages" component={ManagePages} />
						<Route component={NoMatch} />
					</Switch>
				</div>			
			</section>		
		)
	}
}

export default MainComponents;