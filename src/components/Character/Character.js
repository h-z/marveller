import React, { Component } from 'react';
import './Character.css';
import classNames from 'classnames';
import { Image } from 'react-bootstrap';

class Character extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: false
    };
  }

  imageUrl() {
    var thumbnail = this.props.character.thumbnail;
    return `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`
  }

  handleClick() {
    this.props.handleSelected(this.props.character);
  }

  render() {
    return (
      <div className={classNames('Character', 'flip-container', {selected: this.state.selected})} onClick={this.handleClick}>
        <div className="flipper">
          <div className="back">
            {this.props.character.name}
          </div>
          <div className="front">
            <Image src={this.imageUrl()} responsive />
          </div>
        </div>
      </div>
    );
  }
}

export default Character;

