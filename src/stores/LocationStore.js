import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class LocationStore extends EventEmitter {
  constructor() {
    super();
    this.currentLocation = null
  }

  getCurrentLocation() {
    return this.currentLocation
  }

  updateCurrentLocation(newLocation) {
    this.currentLocation = newLocation
    console.log("Location: ",this.currentLocation)
    this.emit('change')
  }

  handleActions(action) {
    switch (action.type) {
      case "UPDATE_LOCATION": {
        this.updateCurrentLocation(action.location)
      }
    }
  }
}

const locationStore = new LocationStore
dispatcher.register(locationStore.handleActions.bind(locationStore));

export default locationStore