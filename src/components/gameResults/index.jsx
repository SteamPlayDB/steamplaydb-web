import { h, Component } from 'preact';

import './style';

import DebianSvg from 'steamplaydb-distro-icons/src/debian.svg';

const GameResult = () => {

  const className = `gameResult column`;

  return (
    <a className={className}>
      <div className="hero is-dark">
        <div className="hero-body is-paddingless">
          <div className="columns">
            <div className="column is-one-quarter">
              <figure className="image is-2by1">
                  <img src="https://steamcdn-a.akamaihd.net/steam/apps/379720/header.jpg" alt=""/>
              </figure>
            </div>
              <div class="column content">
                <h2 className="title">DOOM (2016)</h2>
                <div class="columns is-multilined">
                  <div class="column">
                    <span class="tag is-black is-medium"><i className="la la-check"/> Playability: <span class="has-text-success">9.0</span></span>
                  </div>
                  <div class="column">
                    <span class="tag is-black is-medium"><i className="la la-area-chart"/> Test Results: 5</span>
                  </div>
                  <div class="column">
                    <span class="tag is-black is-medium"><i className="la la-users"/> Comments: 5</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const GameResults = () => {
  return (
    <section class="section">
      <div class="columns">
        <GameResult />
      </div>
    </section>
  );
};

export default GameResults;
