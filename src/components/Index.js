import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Index extends Component{
	 state = {
    characters: []
  }

  componentDidMount(){
    let fetchData = async () =>{
      const respon = await fetch('https://swapi.co/api/people?format=json')
      const data = await respon.json();
      this.setState({
        characters : data.results
      })
      
    }
    fetchData();
    
  }

  render() {
    //console.log(this.state.character);
    let id = 0;
    let people = this.state.characters.length ? (
      this.state.characters.map(person => {
        id++;
        return (
        	<Link key={id} to={'/character/' + id}>
          <p>{person.name}</p>
         </Link>
        )
      })
    ) : (
    //placeholder before data from swapi arrived
      <div>Loading...</div>
    )

    return (
      <div className="index">
        {people}
      </div>
    );
  }
}

export default Index;