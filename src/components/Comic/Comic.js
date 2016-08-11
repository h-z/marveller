import React, { Component } from 'react';
import './Comic.css';
import classNames from 'classnames';

import _ from 'lodash';

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

  detailUrl() {
    return _.first(this.props.comic.urls.map(function (url) {
      if ('detail' === url.type) {
        return url.url;
      }
      return null;
    }));
  }

  handleClick() {
    window.open(this.detailUrl(), '_blank');
  }

  render() {
    return (
      <div
        className={classNames('Comic', 'flip-container', {hidden: !this.props.comic.visible})}
        onClick={this.handleClick.bind(this)}
      >
        <div className="flipper">
          <div className="back">
            {this.props.comic.title}
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
