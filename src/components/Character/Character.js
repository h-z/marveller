import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  imageUrl() {
    var thumbnail = this.props.character.thumbnail;
    return `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`
  }

  handleClick() {
    console.info(this.props.character)
  }

  render() {
    return (
      <div className="Character flip-container" onClick={this.handleClick}>
        <div className="flipper">
          <div className="back">
            <h3>{this.props.character.name}</h3>
          </div>
          <div className="front">
            <img src={this.imageUrl()} alt={this.props.character.name}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Character;

