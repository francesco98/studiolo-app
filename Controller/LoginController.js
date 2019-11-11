import { LoginManager, AccessToken } from 'react-native-fbsdk'
import React from 'react'

import Constants from '../Model/Constants'
import User from '../Model/User'

class LoginController {
  facebookLogin (developMode) {
    return new Promise((resolve, reject) =>
      LoginManager.logInWithPermissions(['public_profile', 'email']).then(
        result => {
          if (result.isCancelled) {
            reject('Login cancelled')
          } else {
            // resolve(true)
            if (developMode) {
              resolve(true)
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                const params = '?input_token=' + data.accessToken.toString()
                fetch(Constants.baseUrl + Constants.loginFacebookUrl + params)
                  .then(res => res.json())
                  .then(data => {
                    resolve(data.result)
                    if (data.result) {
                      let user = User.getInstance()
                      user.initFromJson(data)
                      console.log(user.getFirstName())
                    }
                  })
              })
            }
          }
        },
        error => {
          reject('Login fail with error: ' + error)
        }
      )
    )
  }
}

export default LoginController
