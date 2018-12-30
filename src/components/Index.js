import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Index extends Component{
	 state = {
    fetchrespon: '',
    characters: [],
    show: 'hide'
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.scrfunc)
  }

  scrfunc = ()=>{
    if ((window.innerHeight + window.pageYOffset) === document.body.offsetHeight+20) {
        let fetchNext = async ()=>{
          this.setState({
            show: 'loader'
          })
          const nextres = await fetch(this.state.fetchrespon.next)
          const nextdata = await nextres.json()

          let characters = [...this.state.characters]
          let newchar = characters.concat([...nextdata.results])
          console.log(newchar)
          this.setState({
            fetchrespon: nextdata,
            characters: newchar,
            show: 'hide'
          });

          if(newchar.length >= this.state.fetchrespon.count){
           window.removeEventListener('scroll', this.scrfunc)
          }
        }
        
        fetchNext()
        console.log("you're at the bottom of the page");
      }
  }

  componentDidMount(){
    let fetchData = async () =>{
      const respon = await fetch('https://swapi.co/api/people?format=json')
      const data = await respon.json();
      this.setState({
        fetchrespon: data,
        characters : data.results
      })
      
    }
    fetchData();

    let scrfunc = ()=>{
      
    }

    window.addEventListener('scroll', this.scrfunc)
    
  }


  render() {
    // console.log(this.state.fetchrespon);
    // console.log(this.state.characters);
    let id = 0;
    let people = this.state.characters.length ? (
      this.state.characters.map(person => {
        id++;
        return (
        	<Link className="index__link" key={id} to={'/character/' + id}>
            <div className="index__content">
              <h1>{person.name}</h1>
              <p>click for character info</p>
            </div>
         </Link>
        )
      })
    ) : (
    //placeholder before data from swapi arrived
      <div>Loading...</div>
    )

    return (
      <div className="index">
        <div className="index__wraper">
           {people}
        </div>
        <img src="https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif" className={this.state.show}/>
      </div>
    );
  }
}

export default Index;