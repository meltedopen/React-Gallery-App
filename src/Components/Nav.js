import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

class Nav extends Component {
  onSearch = e => this.props.onSearch(e.target.innerText);
  render() {
    return (
      <nav className="main-nav">
        <SearchForm onSearch={this.props.onSearch} />
        <ul>
          <li>
            <NavLink to={`/search/Berlin`} onClick={this.onSearch}>
              Berlin
            </NavLink>
          </li>
          <li>
            <NavLink to={`/search/Moscow`} onClick={this.onSearch}>
              Moscow
            </NavLink>
          </li>
          <li>
            <NavLink to={`/search/London`} onClick={this.onSearch}>
              London
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
