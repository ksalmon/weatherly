import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CurrentWeather from '../CurrentWeather'

export class BaseLocationCard extends Component {
  static propTypes = {
    locationWeather: PropTypes.object.isRequired,
  }


  render() {
    const { location } = this.props;
    return (
      <div>
        <h2>The weather in {location.name}</h2>
        <hr/>
        <CurrentWeather status={location.main} />
      </div>

    )
  }
}

export default class LocationCard extends BaseLocationCard {}