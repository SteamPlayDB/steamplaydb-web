import { h, Component } from 'preact';

import './style';

const GameResult = () => {

  const className = `gameResult column`;

  return (
    <div className={className}>
      <div className="hero is-dark">
        <div className="hero-body is-paddingless">
          <div className="columns">
            <div className="column is-one-quarter">
              <figure className="image is-2by1">
                <a>
                  <img src="https://steamcdn-a.akamaihd.net/steam/apps/379720/header.jpg" alt=""/>
                </a>
              </figure>
            </div>
              <div class="column content">
                <a><h2 className="title">DOOM (2016)</h2></a>
                <div class="columns">
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
    </div>
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
