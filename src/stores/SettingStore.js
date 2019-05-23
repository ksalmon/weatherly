import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class SettingStore extends EventEmitter {
  constructor() {
    super();
    this.units = [
      { "name": "fahrenheit", "default": true },
      { "name": "celsius", "default": false },
      { "name": "kelvin", "default": false },
    ];
  }

  getAllUnits() {
    return this.units
  }

  getDefaultUnit() {
    return this.units.find(x => x.default === true);
  }

  updateDefaultUnit(newUnit) {
    const currentUnit = this.getDefaultUnit()
    currentUnit.default = false

    const unit = this.units.find(unit => unit.name === newUnit)
    unit.default = true

    this.emit('change')
  }

  handleActions(action) {
    switch (action.type) {
      case "UPDATE_DEFAULT_UNIT": {
        this.updateDefaultUnit(action.unit)
      }
    }
  }
}

const settingStore = new SettingStore
dispatcher.register(settingStore.handleActions.bind(settingStore));

export default settingStore