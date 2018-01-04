import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Layout from './components/index.jsx';
import DashBoard from './components/DashboardComponent/index.jsx';
import Pages from './components/PagesComponent/index.jsx';

const root = document.getElementById('root');

ReactDOM.render(
	<Router>
		<div>
	    	<Route path="/" component={Layout} />
	    	<Route exact={true} path="/" component={DashBoard} />
	    	<Route path="/pages" component={Pages} />
    	</div>
  	</Router>, 
root);


//ReactDOM.render(<Layout />, root);
