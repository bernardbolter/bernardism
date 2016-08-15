import React from 'react';
import { Component } from 'react';

export default class Artwork extends Component {
  render() {
    return (
      <section className="artwork">
        <div className="artwork__header">
          <a href="https://www.instagram.com/p/KVk_3HqAyu/">the whole world + the work =</a>
        </div>
        <div className="artwork__wrapper">
          <div className="artwork__art"><p>under construction</p></div>
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
}
