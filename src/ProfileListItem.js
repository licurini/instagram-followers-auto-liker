import React, { Component } from 'react';
import './ProfileListItem.css';

class ProfileListItem extends Component {
	
	
	render () {
		return (
		    <div>
		        <p>{this.props.name} - {this.props.email}</p>
		    </div>
		)
	}
}

export default ProfileListItem;

