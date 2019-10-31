import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Constants from './Constants';

const fbLogin = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    result => {
      if (result.isCancelled) {
        alert('Login cancelled')
      } else {
        alert('Login success with permissions: ' + JSON.stringify(result))

        AccessToken.getCurrentAccessToken().then(data => {
          const params = "?input_token=" + data.accessToken.toString();
          fetch(Constants.baseUrl + Constants.loginFacebookUrl + params)
          .then((response) => {
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
