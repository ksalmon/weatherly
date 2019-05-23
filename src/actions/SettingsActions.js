import dispatcher from '../dispatcher'

export function updateDefaultUnit(unit) {
    dispatcher.dispatch({
        type: "UPDATE_DEFAULT_UNIT",
        unit,
    })
}