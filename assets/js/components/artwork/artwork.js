import React from 'react';
import { Component } from 'react';

export default class Artwork extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a className="anArtwork" href={artwork.link}>
        <img src={artwork.imageMedium} />
        <p>{props.artwork.title}</p>
        <p>{artwork.width} x {artwork.height} | {artwork.copyrightYear} | {artwork.artMedium}</p>
      </a>
    );
  }
}
