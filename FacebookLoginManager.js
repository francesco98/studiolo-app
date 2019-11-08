import { LoginManager, AccessToken } from 'react-native-fbsdk'
import Constants from './Constants'
import React from 'react'

const fbLogin = (name, surname, email, provatoken) => {
  return new Promise((success) =>
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          alert('Login cancelled')
          success(false);
        } else {
          //alert('Login success with permissions: ' + JSON.stringify(result))
          success(true);

          // AccessToken.getCurrentAccessToken().then(data => {
          // const params = "?input_token=" + data.accessToken.toString();
          // etch(Constants.baseUrl + Constants.loginFacebookUrl + params)
          // .then((response) => {
          // console.log(response.json());

          // })
          // })
        }
      },
      error => {
        alert('Login fail with error: ' + error)
        success(false);
      }
    )
  )
}
export default fbLogin
