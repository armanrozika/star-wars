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
			<div className="character__content">
				<p>Name: {this.state.character.name}</p>
				<p>Gender: {this.state.character.gender}</p>
				<p>Height: {this.state.character.height}</p>
				<p>Mass: {this.state.character.mass}</p>
				<p>Hair Color: {this.state.character.hair_color}</p>
				<p>Skin Color: {this.state.character.skin_color}</p>
				<p>Eye Color: {this.state.character.eye_color}</p>
				<p>Birth Year: {this.state.character.birth_year}</p>
			</div>
			
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
