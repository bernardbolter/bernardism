import React from 'react';
import { Component } from 'react';

export default class Portal extends Component {
  render() {
    return (
      <section className="navigation">
        <h3 className="navigation__contact">b@bernardbolter.com</h3>
        <div className="navigation__links">
          <a href="#" className="navigation__links--cv">cv |</a>
          <a href="#" className="navigation__links--bio">bio |</a>
          <a href="#" className="navigation__links--statement">statement |</a>
          <a href="#" className="navigation__links--text">text |</a>
          <a href="#" className="navigation__links--videos">videos</a>
        </div>
      </section>
    );
  }
}
