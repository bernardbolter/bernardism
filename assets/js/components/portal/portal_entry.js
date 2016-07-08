import React from 'react';
import { Component } from 'react';

export default class Portal extends Component {
  render() {
    return (
      <section className="portal">
      <p>THEWEBPORTALOFBERNARDJOHNBOLTVAKATHEHISTORICALCOLORISTAKATHETRAVELERAKATHEPULLUPMANAKATHESMOOTHISTCUBIST</p>
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
