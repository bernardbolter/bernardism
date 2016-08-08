import React from 'react';
import { Component } from 'react';

export default class PortalLetters extends Component {
  render() {
    return (
      <div className="portal__letters">
        <PortalLetters text="THEWEBPORTAL" color="portal" breaks="4, 7" />
        <span className="portal__letters--aka">OF</span>
        <PortalLetters text="BERNARDJOHNBOLTERIV" color="bernard" breaks="8, 12, 18" />
        <span className="portal__letters--aka">AKA</span>
        <PortalLetters text="THEHISTORICALCOLORIST" color="history" link="http://acolorfulhistory.com/" breaks="4, 13"/>
        <span className="portal__letters--aka">AKA</span>
        <PortalLetters text="THETRAVELER" color="travel" link="http://www.digitalcityseries.com/" breaks="4" />
        <span className="portal__letters--aka">AKA</span>
        <PortalLetters text="THEPULLUPMAN" color="pullup" link="http://www.pullupgallery.org/" breaks="4, 10" />
        <span className="portal__letters--aka">AKA</span>
        <PortalLetters text="THESMOOTHISTCUBIST" color="smooth" link="http://www.smoothism.com/" breaks="4, 13" />
      </div>
    );
  }
}
