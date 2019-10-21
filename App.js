//Static login screen
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, Alert} from 'react-native';
import {Button, Input, SocialIcon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';

const _fbLogin = () => {
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    (result) => {
      if (result.isCancelled) {
        alert('Login cancelled');
      } else {
        alert('Login success with permissions: ' + JSON.stringify(result));
        
        AccessToken.getCurrentAccessToken().then((data) => {
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

export default class Login extends Component{
  render(){
    return(
       <LinearGradient 
          colors={['#4258d4', '#429cd4', '#2a5958']}
          style = {styles.container}>
          <SafeAreaView> 
            <View>

              <Button
                title="Press me"
                onPress={() => _fbLogin()}
              />
              
            </View>
          </SafeAreaView>

        </LinearGradient>
    );
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: "center", 
    alignItems: "center", 
  },
});