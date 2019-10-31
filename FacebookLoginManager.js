import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Costants from 'Costants.js';

const fbLogin = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    result => {
      if (result.isCancelled) {
        alert('Login cancelled')
      } else {
        alert('Login success with permissions: ' + JSON.stringify(result))

        AccessToken.getCurrentAccessToken().then(data => {
          const token = data.accessToken.toString()
          fetch(Costants.baseUrl+Costants.loginFacebookUrl, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              input_token: token,
            })
          }).then((response) => {
            console.log(response.json());
          })
        })
      }
    },
    error => {
      alert('Login fail with error: ' + error)
    }
  )
}
export default fbLogin
