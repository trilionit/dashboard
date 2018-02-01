import React, {Component} from 'react';

class CategoryComponent extends Component{
	
	render(){
		
		return(
			<div className="grid-container">
				<div className="grid-70 secondary-background">
					Categories
				</div>
				<div className="grid-30 secondary-background">
					Page Settings
				</div>
			</div>
		)
	}
}

export default CategoryComponent;