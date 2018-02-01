import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SideBarComponent extends Component {
	render(){
		return(
			<div className="side-bar">
				<div className="side-bar-header">
					<h3><i className="fa fa-file-text"></i> Manage Pages</h3>
				</div>
				<div className="side-nav-bar">
					<span>
						<h3>Site Pages</h3>
						<ul>
							<li><Link to="/pages/add"><i className="fa fa-file-text-o"></i>Add New Page</Link></li>
							<li><Link to="/pages"><i className="fa fa-wrench"></i>Manage Pages</Link></li>
						</ul>
					</span>
					<span>
						<h3>Site Posts</h3>
						<ul>
							<li><Link to="/posts/category"><i className="fa fa-file-text"></i>Categories</Link></li>
							<li><Link to="/posts/new"><i className="fa fa-file-text"></i>Add New Post</Link></li>
							<li><Link to="/posts"><i className="fa fa-wrench"></i>Manage Posts</Link></li>
						</ul>
					</span>
					<span>
						<h3>Media</h3>
						<ul>
							<li><Link to="/media/new-media"><i className="fa fa-camera"></i>Add Media</Link></li>
							<li><Link to="/media"><i className="fa fa-wrench"></i>Manage Media</Link></li>
						</ul>
					</span>
				</div>
			</div>	
		)
}
	}
	


export default SideBarComponent;