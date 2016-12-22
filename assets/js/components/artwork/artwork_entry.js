import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBolterArtwork, getBolterArtwork } from '../../actions/artwork_action';

import Masonry from 'react-masonry-component';

import Artwork from './artwork';

class Artworks extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBolterArtwork();
    console.log('fetchBolter:', this.props.bolterArtwork);
    let artwork = this.props.bolterArtwork
    console.log('artwor:', artwork);
  }

  listArtwork(art) {
    return (
      <div key={art.id} className="anArtwork">
        <a href={art.link} >
          <img src={art.imageMedium} />
          <p className="anArtwork__title">{art.title.rendered}</p>
          <p className="anArtwork__info">{art.width} x {art.height} | {art.copyrightYear} | {art.artform}</p>
        </a>
      </div>
    )
  }

  render = () => {
    return (
      <section className="artwork">
        <div className="artwork__header">
          <div className="max-width">
            <a href="https://www.instagram.com/p/KVk_3HqAyu/">the whole world + the work =</a>
          </div>
        </div>
        <div className="artwork__wrapper">
        <div className="artworkButtons">
          <a href="#" onClick={this.getArtwork.bind(this)}>Sort past</a>
        </div>
          {console.log(this.props.bolterArtwork)}

          {this.props.bolterArtwork.map(this.listArtwork)}
        </div>
        <artwork />
      </section>
    );
  }

  getArtwork(e) {
    e.preventDefault()
    this.props.getBolterArtwork();
  }
}

function mapStateToProps({ bolterArtwork }) {
  return { bolterArtwork };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBolterArtwork, getBolterArtwork }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Artworks);
