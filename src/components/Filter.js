import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


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
		//console.log(this.props)
	}

	onChange = (e)=>{
		this.props.history.push(e.target.value)
	}

	render(){
		let id = 0;
		let filmList = this.state.films ? (
			this.state.films.map(film => {
				id++;
				return(
					<option key={id} value={'/films/' + id}>
						{film.title}
					</option>
				)
			})
		) : (
			<option></option>
		)

		return(
			<div className="filter">
				<p>Filter By Films</p>
				<select onClick={this.onChange}>
					{filmList}
				</select>
			</div>
		)

	}
}

export default withRouter(Filter);