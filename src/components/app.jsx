import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Sidebar from './sidebar';
import SearchBar from './searchBar';
import './style';

import GameResults from './gameResults';

export default class App extends Component {
	render() {
		return (
      <div className="columns is-marginless">
        <div className="column is-one-quarter sidebar is-marginless">
          <Sidebar/>
        </div>
        <section className="main-content">
          <div className="column is-two-thirds top">
            <SearchBar className="input is-large" placeholder="Search Games" />
            <GameResults />
          </div>
        </section>
      </div>
		);
	}
}

