//Static login screen
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FacebookLoginButton from './FacebookLoginButton';


export default class Login extends Component{
  render(){
    return(
       <LinearGradient 
          colors={['#3e50b2', '#009788']}
          style = {styles.container}>
          <SafeAreaView> 
            <View style={styles.container}>
            <Image source={require('./assets/images/LogoStudiolo.png')} style= {styles.logo} />

              <FacebookLoginButton />
              
              
            </View>
          </SafeAreaView>

        </LinearGradient>
    );
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center", 
    alignItems: "center", 
  },
  logo: {
    width: 250,
    height: 65,
    marginBottom: 300

  }
});