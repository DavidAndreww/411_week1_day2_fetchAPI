import React from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";
import BeerDesc from "./BeerDesc";
import BeerSpecs from "./BeerSpecs";
import SpecsButton from "./SpecsButton";
import DescButton from "./DescButton";

class BeerItem extends React.Component {
  state = {
    isLiked: false,
    classText: "beer-card",
    displayDesc: true
  };

  toggleLike = () => {
    let isLiked = this.state.isLiked;
    if (isLiked) {
      this.setState({ classText: "liked-card" });
    } else {
      this.setState({ classText: "beer-card" });
    }

    this.setState({ isLiked: !isLiked });
  };

  toggleData = () => {
    let displayDesc = this.state.displayDesc;
    this.setState({ displayDesc: !displayDesc });
  };

  render() {
    return (
      <div className={this.state.classText}>
        <div className="card-title">
          <img className="image-off" src="../ribbon.png" alt="liked" />
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
        {this.state.displayDesc ? (<SpecsButton toggleData={this.toggleData}/>) : (<DescButton toggleData={this.toggleData} />)}
          {this.state.classText === "liked-card" ? (
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
