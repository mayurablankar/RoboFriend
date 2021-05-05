import React from 'react'
import SearchBox from './component/SearchBox'
import CardList from './component/CardList'
import Scroll from './component/Scroll'
import './component/All.css'


export class App extends React.Component {
	constructor(){
		super ()

			//**** State is used to communicate between searchbox and RobotArray ******
			//****** containning two Field Robot Array and SeachField ******

		this.state ={	

			RobotArray : [],
			searchfield : ''				
		} 
	}

	componentDidMount(){

		// using json Object you can make website faster

		fetch('https://jsonplaceholder.typicode.com/users')
 		.then(response => response.json())
  		.then(users => this.setState({RobotArray:users}));

  	}
		onSearchChange = (event) =>{


				this.setState({searchfield : event.target.value});	
				
	}


	render() {

		const FilterRobot = this.state.RobotArray.filter(RobotArray=>{
			 return RobotArray.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
			<div className ="App">
				<h1>RoboFriends</h1>
				< SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList RobotArray = {FilterRobot}/>
				</Scroll>
			
			</div>
		)
	}
}

export default App;