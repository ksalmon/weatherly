import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class BaseGeolocationButton extends Component {


  render() {
    const { location } = this.props;
    return (
      <button>Fire</button>

    )
  }
}

export default class GeolocationButton extends BaseGeolocationButton {}