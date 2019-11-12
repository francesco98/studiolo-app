import { LoginManager, AccessToken } from 'react-native-fbsdk'
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import Constants from '../Model/Constants'
import User from '../Model/User'

class LoginController {
  // Effettua il login con FB
  facebookLogin () {
    return new Promise((resolve, reject) =>
      LoginManager.logInWithPermissions(['public_profile', 'email']).then(
        result => {
          if (result.isCancelled) {
            reject('Login annullato')
          } else {
            this.facebookAccessToken()
              .then(result => resolve(result))
              .catch(error => reject(result))
          }
        },
        error => {
          reject(error)
        }
      )
    )
  }

  // Ottiene l'access token di FB dopo il login
  facebookAccessToken () {
    return new Promise((resolve, reject) => {
      AccessToken.getCurrentAccessToken().then(data => {
        const params = '?input_token=' + data.accessToken.toString()
        fetch(Constants.baseUrl + Constants.loginFacebookUrl + params)
          .then(res => res.json())
          .then(data => {
            // Creo l'istanza dell'utente loggato
            if (data.result) {
              let user = User.getInstance()
              user.initFromJson(data)
              console.log(user.getFirstName())
              console.log(user.getFirstLogin())
            }

            // Memorizza il login
            AsyncStorage.setItem(Constants.loginDoneKey, Constants.loginDoneValue).then(resolve(data.result))
          })
          .catch(error => {
            AsyncStorage.removeItem(Constants.loginDoneKey).then(reject(error))
          })
      })
    })
  }
}

export default LoginController
