import {LoginManager, AccessToken } from 'react-native-fbsdk';


const fbLogin = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    (result) => {
      if (result.isCancelled) {
        alert('Login cancelled');
      } else {
        alert('Login success with permissions: ' + JSON.stringify(result));
        
        AccessToken.getCurrentAccessToken().then((data) => {
            //Da passare dati al server
          console.log(data);
          console.log(data.accessToken.toString());
          console.log(result.grantedPermissions);
          alert(data.accessToken.toString())
        });

      }
    },
    (error) => {
      alert('Login fail with error: ' + error);
    }
  );
}
export default fbLogin;