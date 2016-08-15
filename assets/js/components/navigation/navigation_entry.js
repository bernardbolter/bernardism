import React from 'react';
import { Component } from 'react';
import classNames from 'classNames';

import NavigationHeader from './navigation_header'
// import NavigationContetn from './navigation_content'
import Bio from './bio';

let styles = {}

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // adds class to navigation__content div
      closeNavContent: false
    };
  }

  closeNavContent(e) {
    e.preventDefault()
    this.setState({openNavContent: false })
    this.setState({closeNavContent: false })
  }

  render() {
    var openNavStyle = classNames({
      'navigation__content': true,
      'navigation__content--open': this.state.openNavContent
    });
    var closeNavStyle = classNames({
      'navigation__content--close' : true,
      'navigation__content--reveal': this.state.closeNavContent

    });
    return (
      <section className="navigation">
        <NavigationHeader />
        <div className={openNavStyle}>
          <div className={closeNavStyle}>
            <a href="#" onClick={this.closeNavContent.bind(this)}>x</a>
          </div>
          <Bio />
        </div>
      </section>
    );
  }
}
