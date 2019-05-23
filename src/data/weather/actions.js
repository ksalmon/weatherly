import dummyData from '../testLocation'
const api = require('../callApi.js')

export const appid = '04ce846255b68682ad4270437412d92e'

export function getWeather(cords, unit) {
  const data = {
    lat: cords.latitude,
    lon: cords.longitude,
    units: unit,
    appid
  };

  const apiEndpoint = `//api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&units=${data.unit}&appid=${data.appid}`

  let settings = {
    method: 'get',
  }

  // return dummyData
  return api.call(apiEndpoint, settings)
}