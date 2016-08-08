import React from 'react';
import { Component } from 'react';

export default class Portal extends Component {
  render() {
    return (
      <section className="portal">
        <div className="portal__letters">
          <span className="portal__title">THE<span className="portal__title--light-1">WEB</span><span className="portal__title--light-2">PORTAL</span></span>
          <span className="portal__aka">OF</span>
          <span className="portal__bernard">BERNARD<span className="portal__bernard--light-1">JOHN</span><span className="portal__bernard--light-2">BOLTER</span><span className="portal__bernard--light-3">IV</span></span>
          <span className="portal__aka">AKA</span>
          <a className="portal__history" href="http://acolorfulhistory.com/">THE<span className="portal__history--light-1">HISTORICAL</span><span className="portal__history--light-2">COLORIST</span></a>
          <span className="portal__aka">AKA</span>
          <a className="portal__travel" href="http://www.digitalcityseries.com/">THE<span className="portal__travel--light-1">TRAVELER</span></a>
          <span className="portal__aka">AKA</span>
          <a className="portal__pullup" href="http://www.pullupgallery.org/">THE<span className="portal__pullup--light-1">PULLUP</span><span className="portal__pullup--light-2">MAN</span></a>
          <span className="portal__aka">AKA</span>
          <a className="portal__smooth" href="http://www.smoothism.com/">THE<span className="portal__smooth--light-1">SMOOTHIST</span><span className="portal__smooth--light-2">CUBIST</span></a>
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
