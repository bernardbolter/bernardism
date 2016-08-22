import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class NavigationContent extends Component {
  renderContent(contentData){
    return (
      <div className='navigation__body' key={contentData[0].id} dangerouslySetInnerHTML = {{__html: contentData[0].content.rendered}} />
    );
  }
  render() {
    return (
        <ReactCSSTransitionGroup transitionName="info-text" transitionEnterTimeout={1000} transitionLeaveTimeout={1}>
          {this.props.bolterInfo.map(this.renderContent)}
        </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps({ bolterInfo }) {
  return { bolterInfo };
}

export default connect(mapStateToProps)(NavigationContent);
