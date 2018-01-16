import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const SideBarComponent = ({match}) => {
	return(
		<div className="side-bar">
			<div className="side-bar-header">
				<h3><i className="fa fa-file-text"></i> Manage Pages</h3>
			</div>
			<div className="side-nav-bar">
				<span>
					<h3>Site Pages</h3>
					<ul>
						<li><Link to={`${match.url}/add`}><i className="fa fa-file-text-o"></i>Add New Page</Link></li>
						<li><Link to="./pages"><i className="fa fa-wrench"></i>Manage Pages</Link></li>
					</ul>
				</span>
				<span>
					<h3>Site Articles</h3>
					<ul>
						<li><Link to="./pages/new-article"><i className="fa fa-file-text"></i>Add New Article</Link></li>
						<li><Link to="/articles"><i className="fa fa-wrench"></i>Manage Articles</Link></li>
					</ul>
				</span>
				<span>
					<h3>Media</h3>
					<ul>
						<li><Link to="./pages/media/new-media"><i className="fa fa-camera"></i>Add Media</Link></li>
						<li><Link to="./pages/media"><i className="fa fa-wrench"></i>Manage Media</Link></li>
					</ul>
				</span>
			</div>
		</div>	
	)
}


export default SideBarComponent;