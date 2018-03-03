import React, {Component} from 'react';

import {Switch, Route} from 'react-router-dom';

import Buttons from './pages/buttons/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import Forms from './pages/forms/index.jsx';
import Grid from './pages/grid/index.jsx';
import InnerPages from './pages/index.jsx';
import Insights from './pages/insights/index.jsx';
import Media from './pages/media/index.jsx';
import Gallery from './pages/Gallery/index.jsx';
import Panels from './pages/panels/index.jsx';


class MainUiComponent extends Component{

	render(){
		return(
			<div className="grid-container">
				<Switch>
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/pages" component={InnerPages} />
					<Route path="/insights" component={Insights} />
					<Route path="/grid" component={Grid} />
					<Route path="/forms" component={Forms} />
					<Route path="/buttons" component={Buttons} />
					<Route path="/panels" component={Panels} />
					<Route path="/media" component={Media} />
					<Route path="/gallery" component={Gallery} />
				</Switch>
			</div>
		)
	}
}

export default MainUiComponent;