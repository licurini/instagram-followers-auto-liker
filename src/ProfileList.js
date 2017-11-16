import React, { Component } from 'react';
import './ProfileList.css';
import ProfileListItem from "./ProfileListItem";

class ProfileList extends Component {
    constructor (props) {
		super();
		
		// Nie wiem jakie ostatecznie elementy będą w local storage więc wrzucilem losowe//
		
		this.state = {
			profiles: [
			    {
				    id: "1",
					name: "Tomek",
					email: "abc@abc.pl"
			    },
				{
					id: "2",
					name: "Dawid",
					email: "aqw@abc.pl"
				},
				{
					id: "3",
					name: "Marcin",
					email: "qwe@qwe.pl"
				},
				{
					id: "4",
					name: "Jakub",
					email: "asfasf@asda.pl"
				},
				{
					id: "5",
					name: "Mateusz",
					email: "adads@adad.pl"
				},
				{
					id: "6",
					name: "Wojciech",
					email: "adsf@fvds.pl"
				},
				{
					id: "7",
					name: "Adrian",
					email: "sdfasg@ghd.pl"
				},
				{
					id: "8",
					name: "Arkadiusz",
					email: "asa@fsfs.pl"
				},
			]
				
			
		}
	}
	

	
  
    render() {
        
		/* generuje instancje komponentu ProfileListItem dla każdego obiektu users */
		
		var users = this.state.profiles.map(function(profile, index){

					return (
					
					    <ProfileListItem 
						    className="ProfileListItem" 
							{...profile} key={index}>
					    
						</ProfileListItem>

				    );
				});
		
		
		return (
            <div>
			    <div>
				    <h1>{this.props.title}</h1>
				</div> 
				<div>
				    {users}
				</div>
            </div>
        );
    }
}

export default ProfileList;
