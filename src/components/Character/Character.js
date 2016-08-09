import React, { Component } from 'react';
import './Character.css';
import classNames from 'classnames';

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
    this.setState({selected: !this.state.selected});
    this.props.handleSelected(this.props.character);
  }

  render() {
    return (
      <div className={classNames('Character', 'flip-container', {selected: this.state.selected})} onClick={this.handleClick}>
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

