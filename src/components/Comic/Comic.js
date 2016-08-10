import React, { Component } from 'react';
import './Comic.css';
import classNames from 'classnames';

class Comic extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: false
    };
  }

  imageUrl() {
    var thumbnail = this.props.comic.thumbnail;
    return `${thumbnail.path}/portrait_small.${thumbnail.extension}`
  }

  handleClick() {
    this.setState({selected: !this.state.selected});
    this.props.handleSelected(this.props.character);
  }

  render() {
    return (
      <div className={classNames('Comic', 'flip-container')}>
        <div className="flipper">
          <div className="back">
            <h3>{this.props.comic.title}</h3>
          </div>
          <div className="front">
            <img src={this.imageUrl()} alt={this.props.comic.title}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Comic;
