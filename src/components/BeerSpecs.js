import React from 'react';

const BeerSpecs = ({ abv, first_brewed, food_pairing }) => {
  return (
    <ul>
      <li>First Brewed: {first_brewed}</li>
      <li>ABV: {abv}</li>
    </ul>
  )
}

export default BeerSpecs;