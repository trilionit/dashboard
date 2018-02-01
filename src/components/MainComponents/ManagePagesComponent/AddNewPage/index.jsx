import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import AddNewPage from './addForm.jsx';
import EditPage from '../EditPage/index.jsx';


class PageListComponent extends Component{

	constructor(){
		super()
		this.state={
			addPages:true,
		}
	}

	render(){
		if(this.state.addPages==false){
			return(
			<div className="panel-container">
				<div className="panel-header text-center">
					<h1><i className="fa fa-file-text-o fa-4x"></i></h1>
				</div>
				<div className="panel-body text-center">
					<h2>Manage Your Pages</h2>
					<h3>You have not created any pages yet</h3>
					
				</div>
			</div>
			)
		}else{
			return(
				<Switch>
					<Route  exact path="/pages" component={AddNewPage} />
					<Route  exact path="/pages/editpage" component={EditPage} />
				</Switch>
			)
		}
	}
}

export default PageListComponent;

