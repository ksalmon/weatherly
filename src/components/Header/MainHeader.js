import React, { Component } from 'react'

import SearchBar from '../SearchBar'

export class Header extends Component {
  
  render() {
    return (
      <div>
        <h1>Welcome to Weatherly</h1>
        <SearchBar />
      </div>
    )
  }
}

export default class MainHeader extends Header {}