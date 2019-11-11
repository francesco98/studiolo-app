import React, { Component } from 'react'
import { StyleSheet, View, TextInput, SafeAreaView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import FacebookLoginButton from '../Component/FacebookLoginButton'
import GoogleLoginButton from '../Component/GoogleLoginButton'
import LoginController from '../../Controller/LoginController'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      display: 'none'
    }
  }

  _finishLogin(promise) {
    const { navigate } = this.props.navigation
    
    promise
      .then(result => {
        if (result) {
          navigate('Signup', {})
        } else {
          alert('Errore generale!')
        }
      })
      .catch(reason => {
        alert(reason)
      })
  }

  render () {
    let loginController = new LoginController()

    return (
      <LinearGradient colors={['#3e50b2', '#009788']} style={styles.container}>
        <SafeAreaView>
          <View style={styles.container}>
            <View />
            <Image
              source={require('../../assets/images/LogoStudiolo.png')}
              style={styles.logo}
            />
            <View>
              <FacebookLoginButton
                onPress={() => {
                  this._finishLogin(loginController.facebookLogin(true /* Passa true for develop mode */))
                }}
              />
              <GoogleLoginButton />
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  logo: {
    width: 250,
    height: 65
  }
})
