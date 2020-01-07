import React from 'react';

class App extends React.Component{
  state = {
    beers: []
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

  render () {
    return (
      <div>
        <h1>Beer</h1>
        <p>api about beer!!!</p>
        <ul>
        {this.state.beers.map((beer, index) => (
          <li key={beer.name}>Name: {beer.name}<br/>Tagling: {beer.tagline}</li>
        ))}
        </ul>
      </div>
    )
  }
}

export default App;
