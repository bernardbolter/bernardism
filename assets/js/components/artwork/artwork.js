import React from 'react';
import { Component } from 'react';

export default class anArtwork extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="anArtwork">
        <p>{this.props.title}</p>
        <p>{this.props.artMedium}</p>
      </div>
    );
  }
}
