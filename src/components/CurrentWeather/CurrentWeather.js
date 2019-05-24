import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Settings from '../../stores/SettingStore'

export class BaseCurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.defaultUnit = this.defaultUnit.bind(this);
    this.state = {
      unit: Settings.getDefaultUnit().name,
    };
  }

  static propTypes = {
    status: PropTypes.object.isRequired,
  }

  componentWillMount() {
    Settings.on("change", this.defaultUnit);
  }

  componentWillUnmount() {
    Settings.removeListener("change", this.defaultUnit);
  }

  defaultUnit() {
    this.setState({
      unit: Settings.getDefaultUnit().name,
    })
  }

  formatTemp = (temp, unit) => {
    if (unit === "celsius") {
      return Math.round(temp - 273.15)
    } else if (unit === "fahrenheit") {
      return Math.round(temp * 9/5 - 459.67)
    } else {
      return Math.round(temp)
    }
  }

  render() {
    const { status } = this.props;
    return (
        <div>
          {this.formatTemp(status.temp, this.state.unit)}°
        </div>
    )
  }
}

export default class CurrentWeather extends BaseCurrentWeather {}