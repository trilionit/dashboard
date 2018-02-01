import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class AddNewPage extends Component{
	
	render(){

		return(
			<div className="grid-1">
				<div className="cs-table">
					<table>
						<tbody>
							<tr className="cs-header">
								<th></th>
								<th>Page Name</th>
								<th>Description (optional)</th>								
								<th>Setup Date</th>
								<th>Status</th>
								<th></th>
							</tr>
							<tr>
								<td>
									<span>
										<i className="fa fa-file-o"></i>
									</span>
								</td>
								<td>
									Home
								</td>
								<td>Landing Page</td>
								<td>Aug 9, 2017</td>
								<td>Active</td>
								<td className="icon-color">
									<Link to="/pages/editpage">
										<span><i className="fa fa-pencil"></i></span>
									</Link>
									<span id="delete"><i className="fa fa-trash"></i></span>
								</td> 
							</tr>
							<tr>
								<td>
									<span>
										<i className="fa fa-file-o"></i>
									</span>
								</td>
								<td>
									About
								</td>
								<td>About Us</td>
								<td>Aug 9, 2017</td>
								<td>Active</td>
								<td className="icon-color">
									<Link to="/pages/editpage">
										<span><i className="fa fa-pencil"></i></span>
									</Link>
									<span id="delete"><i className="fa fa-trash"></i></span>
								</td> 
							</tr>					
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default AddNewPage;

