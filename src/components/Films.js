import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Films extends Component {
	state = {
		charactersurl: '',
		characterlist: []
	}

	componentDidMount(){
		let id = this.props.match.params.id
		let filmLength = async () => {
			const respon = await fetch ('https://swapi.co/api/films/' + id + '/?format=json'  );
			const data = await respon.json();
			
			this.setState({
				charactersurl : data.characters,
			});
			let name = []
			for(let i=0; i<this.state.charactersurl.length; i++){
				fetch(this.state.charactersurl[i]+ '?format=json')
					.then(res =>{
						return res.json()
					}).then(output => {
						name.push(output.name)
						this.setState({
							characterlist: name
						})
					})	
			}
			
			console.log(this.state.characterlist)
		}

		filmLength()
	}

	render(){
		let id=0;
		let characters = this.state.characterlist.length ? (
			this.state.characterlist.map(person =>{
				id++;
				return(
					<Link key={id} to={'/character/' + id}>
		          <p>{person}</p>
		         </Link>
				)
			})
		) : (
			<div>Loading...</div>
		)
		return(
			<div>
				{characters}
			</div>
		)
	}
}

export default Films;