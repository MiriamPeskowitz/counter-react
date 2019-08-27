import React from 'react'


const Button = ({ increment, onClickFunction }) => { 
	const handleClick = () => {
		onClickFunction(increment)
	}
 	return <Button onClick={handleClick}> + {increment} </Button>
 }

export default Button 