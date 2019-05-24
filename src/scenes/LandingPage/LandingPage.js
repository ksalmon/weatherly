import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GeolocationButton from '../../components/GeolocationButton'
import UnitSettings from '../../components/UnitSettings'
import LocationCard from '../../components/LocationCard'
import { getGeolocation } from '../../data/geolocation/actions'
import { getWeather } from '../../data/weather/actions'

export class MainLandingPage extends Component {
  state = {
    location: null,
  };

  componentWillMount() {
    const location = getGeolocation()
      .then(result => {
        getWeather(result)
          .then(locationWeather => {
            this.setState({location: locationWeather});
        })
      })
  }

  render() {
    if (this.state.location) {
      return (
        <div>
          <UnitSettings />
          <LocationCard location={this.state.location}/>
        </div>
      )
    } else { return (
      <div>Locating...</div>
    )}
  }
}

export default class LandingPage extends MainLandingPage {}