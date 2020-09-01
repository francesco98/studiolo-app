import Constants from '../Model/Constants'
import User from '../Model/User'
import Device from '../Model/Device'
import { Platform } from 'react-native'

export default class DeviceController {
  ottieniDevice (deviceId) {
    return new Promise((resolve, reject) => {
      const params =
        '?token=' +
        User.getInstance().getToken() +
        '&platform=' +
        Platform.OS +
        '&deviceId=' +
        deviceId
      fetch(Constants.baseUrl + Constants.deviceUrl + params)
        .then(res => res.json())
        .then(data => {
          if (data.result) {
            let device = new Device()
            device.initFromJson(data.device)

            resolve({result: data.result, device: device})
          } else {
            resolve({result: data.result, device: null})
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
