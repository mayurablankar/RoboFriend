import React from 'react'
import './All.css'

export default function SearchBox({Searchfield,searchChange}) {
	return (
		<div className="box">
			<input
			className ="search"
			 type='search' 
			 placeholder= 'Search Robots'
			 onChange ={searchChange}

			  />
		</div>
	)
}
