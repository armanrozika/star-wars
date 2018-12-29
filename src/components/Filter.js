import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



class Filter extends Component {
	state = {
		films: ''
	}

	componentDidMount(){
		let fetchData = async ()=>{
			const responFilms = await fetch('https://swapi.co/api/films/?format=json')
			const dataFilms = await responFilms.json();
			this.setState({
				films : dataFilms.results
			})
		}
		fetchData()
	}

	render(){
		let id = 0;
		let filmList = this.state.films ? (
			this.state.films.map(film => {
				id++;
				return(
					<NavLink key={id} to={'/films/' + id}>
						<p>{film.title}</p>
					</NavLink>
				)
			})
		) : (
			<p>loading...</p>
		)

		return(
			<div>
				{filmList}
			</div>
		)

	}
}

export default Filter;