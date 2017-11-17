import React, { Component } from 'react';
import './ProfileListItem.css';

class ProfileListItem extends Component {
	constructor (props) {
		super ();
		
		this.state = {
			id: "",
			name: "",
			email: ""
		}
	    
		console.log(this.state)	
	}

	/* Zapisuje do stanu komponentu propsy przekazane przez ProfileList */
	componentWillMount () {
		this.setState({
			id: this.props.id,
			name: this.props.name,
			email: this.props.email
		})
		
	}
	
    componentDidMount () {
		console.log(this.state)
	}	
	render () {
		return (
		    <div>
		        <p>{this.props.name} - {this.props.email}</p>
		    </div>
		)
	}
}

export default ProfileListItem;

