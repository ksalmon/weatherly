import dispatcher from '../dispatcher'

export function updateLocation(location) {
    dispatcher.dispatch({
        type: "UPDATE_LOCATION",
        location,
    })
}