import React from 'react';
import { Component } from 'react';

import Portal from './portal/portal_entry';
import Navigation from './navigation/navigation_entry';
import Artworks from './artwork/artwork_entry';

export default class Entry extends Component {
  render() {
    return (
      <div className="layout">
        <Portal />
        <Navigation />
        <Artworks />
      </div>
    );
  }
}
