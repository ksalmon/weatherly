import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class LocationStore extends EventEmitter {
  constructor() {
    super();
    this.currentLocation = { lat: 0, lng: 0 }
  }

  updateCurrentLocation(newLocation) {
    this.currentLocation = newLocation

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