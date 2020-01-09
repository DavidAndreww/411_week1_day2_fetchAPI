import React from "react";
import LikeButton from './LikeButton'
import LikedButton from './LikedButton'

class BeerItem extends React.Component {
  state = {
    isLiked: true
  }
  render () {
    return (
      <div className="beer-item">
        <div className="title"><h3>{this.props.name}: </h3>{this.props.tagline} 
        {this.state.isLiked ? (<LikedButton />): (<LikeButton />)}
        </div>
        <ul>
          <li>{this.props.desc}</li>
        </ul>
  
        
      </div>
    );
  }
};

export default BeerItem;
// toggle like true or false
//if beer is liked, display green checkmark
// if not liked, displays text
