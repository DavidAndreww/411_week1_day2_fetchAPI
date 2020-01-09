import React from 'react';
import BeerItem from './BeerItem'

class App extends React.Component{
  state = {
    beers: [],
    isLiked: []
  }

  fetchData = () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .then(parsedJSON => this.setState({beers: parsedJSON}))
    .catch(error => console.log('Error occured: ', error))
  } 

  componentDidMount(){
    this.fetchData()
  }

  likeThisBeer = () => {
    console.log('liked')
  }

  render () {
    return (
      <div>
        <h1>Beer</h1>
        <p>api about beer!!!</p>
        <ul>
        {this.state.beers.map((beer, index) => (
          <BeerItem 
          key={beer.name}
          name={beer.name}
          tagline={beer.tagline}
          desc={beer.description}
          likeThisBeer={this.likeThisBeer} 
          />
        ))}
        </ul>
      </div>
    )
  }
}

export default App;

