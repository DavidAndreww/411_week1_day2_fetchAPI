import React from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from './UnlikeButton'

class BeerItem extends React.Component {
  state = {
    isLiked: false,
    classText: "beer-card"
  };

  toggleLike = () => {
    let isLiked = this.state.isLiked;
    if(isLiked){
      this.setState({classText: 'liked-card'})
    } else {
      this.setState({classText: 'beer-card'})
    }

    this.setState({ isLiked: !isLiked });
  };

  render() {
    return (
      <div className={this.state.classText}>
        <div className="card-title">
          <h1>{this.props.name}</h1>
          <h5>{this.props.tagline}</h5>
        </div>
        <div className="card-body">
          <p>{this.props.desc}</p>
        </div>
        <div className="card-actions">
          <button>Specs</button>
          {this.state.classText === 'liked-card' ? (<UnlikeButton toggleLike={this.toggleLike} />) : (<LikeButton toggleLike={this.toggleLike} />)}
        </div>
      </div>
    );
  }
}

export default BeerItem;
