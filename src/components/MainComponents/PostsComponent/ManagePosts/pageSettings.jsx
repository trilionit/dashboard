import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import AddNewPost from './addForm.jsx';
//import EditPage from '../EditPage/index.jsx';


class PostListComponent extends Component{

	constructor(){
		super()
		this.state={
			addPages:true,
		}
	}

	render(){
		if(this.state.addPages==false){
			return(
			<div className="grid-center-container">
				<div className="grid-center">
					<div className="panel-container">
						<div className="panel-header text-center">
							<h1><i className="fa fa-file-text-o fa-4x"></i></h1>
						</div>
						<div className="panel-body text-center">
							<h2>Manage Your Posts</h2>
							<h3>You have not added any posts yet</h3>
							<span><button className="success">Add Post</button></span>
						</div>
					</div>
				</div>
			</div>
			)
		}else{
			return(
				<Switch>
					<Route  exact path="/posts" component={AddNewPost} />
				</Switch>
			)
		}
	}
}

export default PostListComponent;

