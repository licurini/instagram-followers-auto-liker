import React, { Component } from 'react';
import './Profiles.css';

class Profiles extends Component {
    constructor (props) {
		super();
		
		this.state = {
			users: [
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
        return (
            <div className="Profiles">
              
            </div>
        );
    }
}

export default Profiles;
