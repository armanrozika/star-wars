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
				let char = await fetch(this.state.charactersurl[i]+ '?format=json');
				let back = await char.json();

				name.push(back.name);
				this.setState({
					characterlist: name
				})
			}
			//this.state.characterlist.push(9)
			
			//console.log(this.state.characterlist)
		}

		filmLength()
	}

	componentDidUpdate(prev){
		if (this.props.location !== prev.location) {
      	
      let id = this.props.match.params.id
		let filmLength = async () => {
			const respon = await fetch ('https://swapi.co/api/films/' + id + '/?format=json'  );
			const data = await respon.json();
			
			this.setState({
				charactersurl : data.characters,
			});
			let name = []
			for(let i=0; i<this.state.charactersurl.length; i++){
				let char = await fetch(this.state.charactersurl[i]+ '?format=json');
				let back = await char.json();

				name.push(back.name);
				this.setState({
					characterlist: name
				})
			}
		}

		filmLength()
		
    	}
	}

	render(){
		//console.log(this.state.characterlist)
		let id= 0;
		let charId = 0;
		let characters = this.state.charactersurl.length ? (
			this.state.charactersurl.map(person =>{
				id = person.slice(28);
				charId++
				return(
					<Link key={id} to={'/character/' + id}>
						<div className="films__content">
							<h1>{this.state.characterlist[charId-1]}</h1>
							<p>Click for character info</p>
						</div>
		         </Link>
				)
				
			})
		) : (
			<div>Loading...</div>
		)
		return(
			<div className="films">
				{characters}
			</div>
		)
	}
}

export default Films;