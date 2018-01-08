import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';

import Layout from './components/index.jsx';

const root = document.getElementById('root');
ReactDOM.render(
	<Router>
		<Layout />
	</Router>
, root);
