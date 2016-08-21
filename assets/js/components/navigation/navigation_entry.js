import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBolterInfo} from '../../actions/index';

import Scroll from 'react-scroll';
import classNames from 'classNames';

import NavigationContent from "./navigation_content";

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openNavContent: false,
      closeNavContent: false,
      selected: ''
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
      'navigation__content': !this.state.openNavContent,
      'navigation__content--open': this.state.openNavContent
    });
    var closeButton = classNames({
      'navigation__close': !this.state.closeNavContent,
      'navigation__close--visible': this.state.closeNavContent
    });
    var navigationBackground = classNames({
      'navigation': true,
      'navigation__background': this.state.openNavContent
    });

    return (
      <section ref="navigation" className={navigationBackground}>
        {/* NAVIGATION HEADER */}
        <div className="navigation__header">
          <h3 className="navigation__header--contact">b [ at symbol ] bernardbolter.com</h3>
          <div className="navigation__header--links">
            <a href="#" onClick={this.openNavContent.bind(this, 'cv' )} className={this.isActive('cv')} >cv</a>
            <a href="#" onClick={this.openNavContent.bind(this, 'bio' )} className={this.isActive('bio')} >bio</a>
            <a href="#" onClick={this.openNavContent.bind(this, 'statement' )} className={this.isActive('statement')} >statement</a>
            <a href="https://vimeo.com/user4456819">videos</a>
          </div>
        </div>
        {/* NAVIGATION CONTENT*/}
        <div className={openNavStyle}>
          <div className={closeButton}>
            <a href="#" onClick={this.closeNavContent.bind(this)}>x</a>
          </div>
          <div className="navigation__bodywrapper">
            <NavigationContent />
          </div>
        </div>
      </section>
    );
  }

  openNavContent(text, e) {
    e.preventDefault()
    // GET DISTANCE FROM NAVIGATION TO TOP AND THEN SCROLL THERE
    let bounding = this.refs.navigation.getBoundingClientRect();
    let top = bounding.top
    if(this.state.openNavContent === false) {
      scroll.scrollMore(top);
    } else {
      null
    }
    // CHANGE CLASSES ON ELEMENTS TO REVEAL
    this.setState({openNavContent: true })
    this.setState({closeNavContent: true })
    // HIGHLIGHT NAV BUTTONS
    this.setState({selected: text })
    // PASS INFO TO REDUX TO DISPLAY CORRECT CONTENT
    this.props.fetchBolterInfo(text);
  }

  isActive(value) {
    return 'navigation__header--' + ((value === this.state.selected) ? 'active' : '');
  }

  closeNavContent(e) {
    e.preventDefault()
    this.setState({openNavContent: false })
    this.setState({closeNavContent: false })
    this.setState({selected: ''})
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBolterInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navigation);
