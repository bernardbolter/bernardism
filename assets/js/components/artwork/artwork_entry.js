import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBolterArtwork} from '../../actions/artwork_action';

class Artwork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artwork: []
    };
    console.log(this.state);

    this.getArtwork = this.getArtwork.bind(this);
  }
  componentDidMount(text) {
    this.props.fetchBolterArtwork(text);
    console.log(this.props.bolterArtwork);
    this.setState({
      artwork: this.props.bolterArtwork
    });
  }
  renderArtwork(art) {
    return (
      <li>{art.title}</li>
    );
  }
  render() {
    return (
      <section className="artwork">
        <div className="artwork__header">
          <div className="max-width">
            <a href="https://www.instagram.com/p/KVk_3HqAyu/">the whole world + the work =</a>
          </div>
        </div>
        <div className="artwork__wrapper">
          <div className="artwork_tester">
          {console.log(this.props.bolterArtwork)}
          {this.props.bolterArtwork.map(function(art) {
            return (
              <div key={art.id} className="artwork_single">
                <p>{art.title.rendered}</p>
                <p>{art.artMedium}</p>
                <p>{art.artform}</p>
              </div>
            );
          })}
          </div>
            <div className="artwork__art">
            <a href="#" onClick={this.getArtwork} >under construction</a>
            </div>
            <div className="artwork__interim">
              <h3 className="artwork__interim--header">one old school for the interim</h3>
              <img src="./img/education.jpg" alt="Education - oil painting - 1997" />
              <h2 className="artwork__interim--title">Education</h2>
              <h5 className="artwork__interim--details">36" x 24" | oil painting | 1997</h5>
            </div>
          </div>
      </section>
    );
  }

  getArtwork(e) {
    e.preventDefault()
    this.props.fetchBolterArtwork();
  }
}

function mapStateToProps({ bolterArtwork }) {
  return { bolterArtwork };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBolterArtwork }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Artwork);
