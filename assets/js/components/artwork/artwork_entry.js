import React from 'react';
import { Component } from 'react';

export default class Portal extends Component {
  render() {
    return (
      <section className="artwork">
        <div className="artwork__header">
          <p>the world + the work =</p>
        </div>
        <div className="artwork__wrapper">
          <p>under construction</p>
          <div className="artwork__interim">
            <h3 className="artwork__interim--header">one old school for the interim</h3>
            <img src="./img/alter-of-ignorance.jpg" alt="alter of ignorance - oil painting - 1997" />
            <h2 className="artwork__interim--title">Alter of Ignorance</h2>
            <h5 className="artwork__interim--details">24" x 14" | oil painting | 1995</h5>
          </div>
        </div>
      </section>
    );
  }
}
