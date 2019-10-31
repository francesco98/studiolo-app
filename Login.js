
import React, {Component} from 'react';
import {StyleSheet, View, TextInput, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';

export default class Login extends Component{
  static navigationOptions = {  
        title: 'Login',  
        headerStyle: {
          display: 'none',
        }}
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = { 
            
        }; 
    }
  render(){
    const { navigate } = this.props.navigation;
    return(
       <LinearGradient 
          colors={['#3e50b2', '#009788']}
          style = {styles.container}>
          <SafeAreaView> 
            <View style={styles.container}>
              <View />
              <Image source={require('./assets/images/LogoStudiolo.png')} style= {styles.logo} />
              <View>
                <FacebookLoginButton navigation={navigate} />
                <GoogleLoginButton />
              </View>
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
    justifyContent: 'space-around',
    alignItems: "center", 
  },
  logo: {
    width: 250,
    height: 65
  }
});