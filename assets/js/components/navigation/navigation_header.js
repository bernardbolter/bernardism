import React from 'react';
import { Component } from 'react';

export default class NavigationHeader extends Component {
  constructor(props) {
    super(props);

      this.state = {
        // adds class to navigation__header div
        openNavContent: false,
      };
    }

    openNavContent(e) {
      e.preventDefault()
      let bounding = this.refs.navigation.getBoundingClientRect();
      let top = bounding.top
      console.log(top)
      if(this.state.openNavContent === false) {
        window.scrollBy(0,top)
      } else {
        null
      }

      this.setState({openNavContent: true })
      this.setState({closeNavContent: true })
    }

    render() {
      return (
        <div ref='navigation' className="navigation__header">
          <h3 className="navigation__header--contact">b [ at symbol ] bernardbolter.com</h3>
          <div className="navigation__header--links">
            <a href="#" onClick={this.openNavContent.bind(this)} className="navigation__header--cv">cv</a>
            <a href="#" onClick={this.openNavContent.bind(this)} className="navigation__header--bio">bio</a>
            <a href="#" onClick={this.openNavContent.bind(this)} className="navigation__header--statement">statement</a>
            <a href="#" className="navigation__header--videos">videos</a>
          </div>
        </div>
      );
    }
  }
