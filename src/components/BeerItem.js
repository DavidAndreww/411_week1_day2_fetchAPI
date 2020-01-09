import React from "react";
import LikeButton from "./LikeButton";


class BeerItem extends React.Component {
  state = {
    isLiked: true,
    class: ''
  };

  handleLike = () => {
    console.log('hay')
  }

  render() {
    return (
      <div className="beer-card">
        <div className="card-title">
          <h1>{this.props.name}</h1>
          <h5>{this.props.tagline}</h5>
        </div>
        <div className="card-body">
          <p>{this.props.desc}</p>
        </div>
        <div className="card-actions">
        <button>Specs</button>
        <LikeButton handleClick={this.handleLike}/>
        </div>
      </div>
    );
  }
}

export default BeerItem;
// toggle like true or false
//if beer is liked, display green checkmark
// if not liked, displays text
// {this.state.isLiked ? (<LikedButton />): (<LikeButton />)}
