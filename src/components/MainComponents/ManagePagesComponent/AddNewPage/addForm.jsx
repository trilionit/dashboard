import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddNewPage extends Component{
	
	render(){

		return(
			<div className="grid-1">
				<div className="cs-table">
					<table>
						<tbody>
							<tr className="table-header">
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
										<i className="fa fa-plus" id="plus-1"></i>
									</span>
								</td>
								<td>Home</td>
								<td>Landing Page</td>
								<td>Aug 9, 2017</td>
								<td>Active</td>
								<td className="icon-color">
									<Link to="/editpage">
										<span><i className="fa fa-pencil"></i></span>
									</Link>
									<span><i className="fa fa-trash"></i></span>
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

