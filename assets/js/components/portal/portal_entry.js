import React from 'react';
import { Component } from 'react';

import PortalLetters from './portal_letters';

export default class Portal extends Component {
  render() {
    return (
      <section className="portal">
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
        <div className="portal__name-links">
          <div className="portal__name">
            <p>Bernard</p>
            <p>John</p>
            <p>Bolter</p>
            <p>IV</p>
          </div>
          <div className="portal__links">
            <a className="portal__links--color" href="http://acolorfulhistory.com/">acolorfulhistory.com</a>
            <a className="portal__links--dcs" href="http://www.digitalcityseries.com/">digitalcityseries.com</a>
            <a className="portal__links--pullup" href="http://www.pullupgallery.org/">pullupgallery.org</a>
            <a className="portal__links--smooth" href="http://www.smoothism.com/">smoothism.com</a>
          </div>
        </div>
      </section>
    );
  }
}
