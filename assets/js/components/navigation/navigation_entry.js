import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBolterInfo} from '../../actions/index';

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

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // adds class to navigation__header div
      openNavContent: false,
      closeNavContent: false,
      linkText: ""
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
      <section ref="navigation" className="navigation">
        {/* NAVIGATION HEADER */}
        <div className="navigation__header">
          <h3 className="navigation__header--contact">b [ at symbol ] bernardbolter.com</h3>
          <div className="navigation__header--links">
            <a href="#" onClick={this.openNavContent.bind(this, 'cv' )} className={'navigation__header--'+this.state.linkText}>cv</a>
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
          {this.renderContent()}
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
    // PASS INFO TO REDUX TO DISPLAY CORRECT CONTENT
    this.props.fetchBolterInfo(text);
  }

  closeNavContent(e) {
    e.preventDefault()
    this.setState({openNavContent: false })
    this.setState({closeNavContent: false })
  }

  renderContent() {
    let contentText = this.state.linkText
    if (contentText === 'cv') {
      return <CV />;
    } else if (contentText === 'bio') {
      return <Bio />;
    } else if (contentText === 'statement') {
      return <Statement />;
    } else {
      return null;
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBolterInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navigation);
