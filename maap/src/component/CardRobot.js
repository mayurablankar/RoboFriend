import React from 'react'
import './All.css'

export default function CardRobot(props) { 

return (
	<div className="CardRCss">
	<div className="im">
	
		<img alt="Robot" src={`https://robohash.org/${props.name}`} width="200px" height="200px"/>

	</div>

	<div className="imn">
		<h5>{props.name}</h5>
		<h6>{props.email}</h6>
	</div>

	</div>

	)	
}