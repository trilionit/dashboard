import React, {Component} from 'react';

class Pages extends Component{
	render(){
		return(
			<section className="main-container">
				<div className="side-bar">
					<div className="side-bar-header">
						<h3><i className="fa fa-file-text"></i> Manage Pages</h3>
					</div>
					<div className="side-nav-bar">
						<span>
							<h3>Site Pages</h3>
							<ul>
								<li><a href=""><i className="fa fa-file-text-o"></i>Add New Page</a></li>
								<li><a href=""><i className="fa fa-wrench"></i>Manage Pages</a></li>
							</ul>
						</span>
						<span>
							<h3>Site Articles</h3>
							<ul>
								<li><a href=""><i className="fa fa-file-text"></i>Add New Article</a></li>
								<li><a href=""><i className="fa fa-wrench"></i>Manage Articles</a></li>
							</ul>
						</span>
						<span>
							<h3>Media</h3>
							<ul>
								<li><a href=""><i className="fa fa-camera"></i>Add Media</a></li>
								<li><a href=""><i className="fa fa-wrench"></i>Manage Media</a></li>
							</ul>
						</span>
					</div>
				</div>

				<div className="pages-container">
					<div className="grid-1">
						<div className="page-header">
							<h2>Pages</h2>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Pages;