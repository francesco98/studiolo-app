//Static login screen
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, Alert} from 'react-native';
import {Button, Input, SocialIcon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { LoginButton, AccessToken } from 'react-native-fbsdk';



export default class Login extends Component{
  render(){
    return(
       <LinearGradient 
          colors={['#4258d4', '#429cd4', '#2a5958']}
          style = {styles.container}>
          <SafeAreaView> 
            <View>
              <LoginButton //Nota: posso implementare la logica anche in un altro elemento
              
              publishPermissions={["email"]}
              //style={{bottom: 60}}
              onLoginFinished={
              (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                //alert("Login was successful with permissions: " + result.grantedPermissions)
                AccessToken.getCurrentAccessToken().then((data) => {
                  alert(data.accessToken.toString())
                });
  
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
              
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