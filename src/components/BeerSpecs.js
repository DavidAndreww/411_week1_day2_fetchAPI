import React from 'react';

const BeerSpecs = ({ abv, first_brewed, food_pairing }) => {
  return (
    <div>
      <p><b>First Brewed:</b> {first_brewed}</p>
      <p><b>ABV:</b> {abv}</p>
      <ul><b>Food Pairing:</b>{food_pairing.map(food => <li key={food}>{`${food}`}</li>)}</ul>
    </div>
  )
}

export default BeerSpecs;