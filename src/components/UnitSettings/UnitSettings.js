import React, { Component } from 'react'

import Settings from '../../stores/SettingStore'
import * as Actions from '../../actions/SettingsActions'

export class BaseUnitSettings extends Component {
  constructor(props) {
    super(props);
    this.defaultUnit = this.defaultUnit.bind(this)
    this.state = { 
      defaultUnit: Settings.getDefaultUnit(),
      units: Settings.getAllUnits(),
    };
  }

  componentWillMount() {
    Settings.on("change", this.defaultUnit);
  }

  componentWillUnmount() {
    Settings.removeListener("change", this.defaultUnit);
  }

  defaultUnit() {
    this.setState({
      defaultUnit: Settings.getDefaultUnit(),
    })
  }

  changeUnit = (e) => {
    Actions.updateDefaultUnit(e.target.value)
  }

  render() {
    const { units, defaultUnit } = this.state;
    return (
      <div>
        <select id="lang" onChange={this.changeUnit.bind(this)} value={defaultUnit.name}>
          { units.map((unit, i) => {
              return <option key={i} value={unit.name}>{unit.name}</option>
            })
          }
         </select>
       </div>
    );
  }
}

export default class UnitSettings extends BaseUnitSettings {}