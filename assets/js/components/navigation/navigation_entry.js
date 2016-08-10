import React from 'react';
import { Component } from 'react';

import classNames from 'classNames';

let styles = {}

export default class Portal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false
    };
  }

  isPressed(e) {
    e.preventDefault()
    let bounding = this.refs.navigation.getBoundingClientRect();
    let top = -bounding.top
    console.log(top)
    styles.top = top

    this.setState({isPressed: true})
  }

  render() {
    var navClass = classNames({
      'navigation': true,
      'navigation--pressed': this.state.isPressed
    });
    return (
      <section ref='navigation' className={navClass} style={styles}>
        <h3 className="navigation__contact">b [ at symbol ] bernardbolter.com</h3>
        <div className="navigation__links">
          <a href="#" onClick={this.isPressed.bind(this)} className="navigation__links--cv">cv</a>
          <a href="#" onClick={this.isPressed.bind(this)} className="navigation__links--bio">bio</a>
          <a href="#" onClick={this.isPressed.bind(this)} className="navigation__links--statement">statement</a>
          <a href="#" className="navigation__links--videos">videos</a>
        </div>
      </section>
    );
  }
}
