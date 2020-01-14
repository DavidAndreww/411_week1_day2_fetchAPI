// state.isLiked changes on first call to toggleLike (line 20), but effects of class change are not visible on the DOM until called a second time. 


import React from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";
import BeerDesc from "./BeerDesc";
import BeerSpecs from "./BeerSpecs";
import SpecsButton from "./SpecsButton";
import DescButton from "./DescButton";
import img from "../ribbon.png";

class BeerItem extends React.Component {
  state = {
    isLiked: false,
    displayDesc: true
  };

  toggleLike = () => {
    let isLiked = this.state.isLiked;
    this.setState({ isLiked: !isLiked });
  };

  toggleData = () => {
    let displayDesc = this.state.displayDesc;
    this.setState({ displayDesc: !displayDesc });
  };

  render() {
    return (
      <div className="beer-card">
        <div className="card-title">
          <img className={this.state.isLiked ? ('image-on') : ('image-off')} src={img} alt="liked" />
          <h1>{this.props.name}</h1>
          <h5>{this.props.tagline}</h5>
        </div>
        <div className="card-body">
          {this.state.displayDesc ? (
            <BeerDesc desc={this.props.desc} />
          ) : (
            <BeerSpecs
              abv={this.props.abv}
              food_pairing={this.props.food_pairing}
              first_brewed={this.props.first_brewed}
            />
          )}
        </div>
        <div className="card-actions">
          {this.state.displayDesc ? (
            <SpecsButton toggleData={this.toggleData} />
          ) : (
            <DescButton toggleData={this.toggleData} />
          )}
          {this.state.isLiked ? (
            <UnlikeButton toggleLike={this.toggleLike} />
          ) : (
            <LikeButton toggleLike={this.toggleLike} />
          )}
        </div>
      </div>
    );
  }
}

export default BeerItem;
