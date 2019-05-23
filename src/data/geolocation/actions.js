const api = require('../callApi.js')

const defaultCoordinates = {
  latitude: 40.719371,
  longitude: -74.001812,
}

const coordsFromBrowser = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
    } else {
      // reject the Promise in case the user chooses not to interact with permission prompt
      const permissionRequesetTimeout = setTimeout(() => {
        console.log('User not responding')
        resolve()
      }, 10000)
      navigator.geolocation.getCurrentPosition(
        position => {
          clearTimeout(permissionRequesetTimeout)
          /**
           * @type coords
           * @property coords.accuracy {Number}
           * @property coords.latitude {Number}
           * @property coords.longitude {Number}
           */
          resolve(position.coords)
        },
        error => {
          clearTimeout(permissionRequesetTimeout)
          console.log(error)
          resolve()
        },
        { timeout: 10000 }
      )
    }
  })

let asyncGeolocation

export function getGeolocation() {
    asyncGeolocation = coordsFromBrowser()
      .then(coords => {
        if (coords) return coords

        const apiEndpoint = `http://ip-api.com/json`
        const settings = { method: 'get' }

        api.call(apiEndpoint, settings)
          .then( result => {
            return { latitude: result.lat, longitude: result.lon }
          })
          .then(coords => {
            const latLng = coords || defaultCoordinates
            return latLng
          })
    })
    return asyncGeolocation
}