import React, {Component} from 'react';
import AddNewPage from './addForm.jsx';
class PageListComponent extends Component{

	constructor(){
		super()
		this.state={
			addPages:true
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
				<AddNewPage />
			)
		}
	}
}

export default PageListComponent;

