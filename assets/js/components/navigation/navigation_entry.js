import React from 'react';
import { Component } from 'react';
import Scroll from 'react-scroll';

import classNames from 'classNames';

import CV from './cv';
import Bio from './bio';
import Statement from './statement';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // adds class to navigation__header div
      openNavContent: false,
      closeNavContent: false,
      renderContent: null
    };
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    var openNavStyle = classNames({
      'navigation__content': true,
      'navigation__content--open': this.state.openNavContent
    });
    var closeButton = classNames({
      'navigation__close' : true,
      'navigation__close--visible': this.state.closeNavContent

    });
    var renderContent = '';

    return (
      <section className="navigation">
        {/* NAVIGATION HEADER */}
        <div ref='navigation' className="navigation__header">
          <h3 className="navigation__header--contact">b [ at symbol ] bernardbolter.com</h3>
          <div className="navigation__header--links">
            <a href="#" onClick={this.openNavContent.bind(this, 'cv' )} className="navigation__header--cv">cv</a>
            <a href="#" onClick={this.openNavContent.bind(this, 'bio' )} className="navigation__header--bio">bio</a>
            <a href="#" onClick={this.openNavContent.bind(this, 'statement' )} className="navigation__header--statement">statement</a>
            <a href="https://vimeo.com/user4456819" className="navigation__header--videos">videos</a>
          </div>
        </div>
        {/* NAVIGATION CONTENT*/}
        <div className={openNavStyle}>
          <div className={closeButton}>
            <a href="#" onClick={this.closeNavContent.bind(this)}>x</a>
          </div>
          {renderContent}
        </div>
      </section>
    );
  }

  openNavContent(text, e) {
    e.preventDefault()
    console.log(text)
    var renderContent = '';
    if (text === 'cv') {
      renderContent = <CV />;
    } else if (text === 'bio') {
      renderContent = <Bio />;
    } else if (text === 'statement') {
      renderContent = <Statement />;
    }
    let bounding = this.refs.navigation.getBoundingClientRect();
    let top = bounding.top
    if(this.state.openNavContent === false) {
      scroll.scrollMore(top);
    } else {
      null
    }
    this.setState({openNavContent: true })
    this.setState({closeNavContent: true })
  }

  closeNavContent(e) {
    e.preventDefault()
    this.setState({openNavContent: false })
    this.setState({closeNavContent: false })
  }
}
