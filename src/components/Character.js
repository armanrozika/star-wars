import React, { Component } from 'react';



class Character extends Component {
	state = {
		character: ''
	}

	componentDidMount(){
		let id = this.props.match.params.id
		let fetchData = async ()=>{
			const respon = await fetch('https://swapi.co/api/people/'+ id + '/?format=json')
			const data = await respon.json();
			this.setState({
				character : data
			})
		}
		fetchData()
		
	}

	render(){
		let person = this.state.character ? (
			<p>{this.state.character.name}</p>
		) : (
			<p>loading...</p>
		)
		return(
		 <div className="character">
		 	{person}
		 </div>
		)
	}
}

export default Character;
