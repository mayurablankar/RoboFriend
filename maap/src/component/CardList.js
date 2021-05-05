import React from 'react'
import CardRobot from './CardRobot'

const CardList = ({RobotArray}) => {
	
	 //fetch data frrom RobotArray using loop

			const Cardlist = RobotArray.map((user,i) =>{
				return 	< CardRobot
						key = {i}
						id={RobotArray[i].id}
						name={RobotArray[i].name} 
						email={RobotArray[i].email}

						/>
			})

	return (
		<div className="cardlist">

			{Cardlist}
			
		</div>
	)
}

export default CardList