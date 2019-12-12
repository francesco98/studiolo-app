import { Buffer } from 'buffer'
import { BleManager } from 'react-native-ble-plx'
import { Platform } from 'react-native'
import Constants from './Constants'

export default class Context {
  static myInstance = null
  _bleManager = null

  static getInstance () {
    if (Context.myInstance == null) {
      Context.myInstance = new Context()
    }

    return this.myInstance
  }

  constructor () {
    if (Platform.OS === 'ios') {
      this._bleManager = new BleManager({
        restoreStateIdentifier: 'BLEBackgroundMode',
        restoreStateFunction: bleRestoredState => {
          console.log('BLE RESTORED')
        }
      })
    } else {
      this._bleManager = new BleManager()
    }
  }

  getBleManager () {
    return this._bleManager
  }

  // Allow you to check BLE status
  subscribeToBleStatus (listener) {
    if (this._bleManager !== null) {
      return this._bleManager.onStateChange(state => {
        if (state === 'PoweredOn') {
          listener(true, null)
        } else if (state === 'PoweredOff') {
          listener(false, 'Il bluetooth non è attivo!')
        } else {
          listener(false, 'Ops... qualcosa non va')
        }
      })
    }
  }

  // Allow you to connect to a device
  connectToDevice (deviceId, listener) {
    this._bleManager.state().then(state => {
      if (state === 'PoweredOn') {
        let timeBefore = Date.now()

        this._bleManager.startDeviceScan(null, null, (error, device) => {
          if (error || Date.now() - timeBefore > 10 * 1000) {
            this._bleManager.stopDeviceScan()

            listener(false, error ? error.message : "Connessione fallita!", null, null)
          }

          /*
            Before was device.name.
            or security reason now is device.id which is MAC address on Android and UUID on iOS.
          */

          if (device.id.toUpperCase() == deviceId.toUpperCase()) {
            this._bleManager.stopDeviceScan()

            device
              .connect()
              .then(device => {
                return device.discoverAllServicesAndCharacteristics()
              })
              .then(device => {
                return device.services()
              })
              .then(services => {
                let i = 0
                for (i = 0; i < services.length; i++) {
                  if (
                    services[i].uuid.toUpperCase() ===
                    Constants.serviceUUID.toUpperCase()
                  ) {
                    return services[i].characteristics()
                  }
                }
              })
              .then(characteristics => {
                listener(true, 'Connesso!', device, characteristics[0])
              })
              .catch(error => {
                listener(false, error, null, null)
              })
          }
        })
      } else {
        listener(false, 'Il bluetooth non è attivo!', null, null)
      }
    })
  }

  // Allow you to be notified when a value changed
  subscribeToBleCharacteristic (characteristic, listener) {
    return characteristic.monitor((e, c) => {
      if (e) {
        listener(false, e.message)
        return
      }

      const buffer = new Buffer(c.value, 'base64')
      const bufStr = buffer.toString()

      listener(true, bufStr)
    })
  }

  // Allow you to write a value
  sendBleMessage (characteristic, message) {
    const buffer = new Buffer(message)
    const bufBase64 = buffer.toString('base64')

    characteristic.writeWithoutResponse(bufBase64)
  }

  // Allow you to disconnect from the device
  disconnectFromDevice (device) {
    device.cancelConnection()
  }

  // Allow you to unsubscribe from subscribe type method
  stopToSubscribe (subscription) {
    subscription.remove()
  }
}
