import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  SafeAreaView,
  Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage'
import * as Progress from 'react-native-progress';

import FacebookLoginButton from '../Component/FacebookLoginButton'
import GoogleLoginButton from '../Component/GoogleLoginButton'
import LoginController from '../../Controller/LoginController'
import User from '../../Model/User'
import Constants from '../../Model/Constants'

export default class Login extends Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      display: 'none'
    }
  }

  _loginController = new LoginController()
  state = { isLoginDone: false }

  componentDidMount () {
    AsyncStorage.getItem(Constants.loginDoneKey).then(loginDone =>
      {
        this.setState({ isLoginDone: loginDone })
        if(loginDone) {
          this._finishLogin(this._loginController.facebookAccessToken())
        }
      }
    )
  }

  _finishLogin (promise) {
    const { navigate } = this.props.navigation

    promise
      .then(result => {
        if (result) {
          let user = User.getInstance()
      
          if (user.getFirstLogin()) {
            navigate('Signup', {})
          } else {
            navigate('Dashboard', {}) 
          }
        } else {
          alert('Errore generale!')
        }
      })
      .catch(reason => {
        alert(reason)
        this.setState({ isLoginDone: false })
      })
  }

  render () {
    let condtionalViews = (
      <View>
        <Progress.Bar size={100} indeterminate={true} color={"#FFFFFF"} />
      </View>
    );

    if (!this.state.isLoginDone) {
      condtionalViews = (
        <View>
          <FacebookLoginButton
            onPress={() => {
              this._finishLogin(this._loginController.facebookLogin())
              this.setState({ isLoginDone: true })
            }}
          />
          <GoogleLoginButton />
        </View>
      );
    }

    return (
      <LinearGradient colors={['#3e50b2', '#009788']} style={styles.container}>
        <SafeAreaView>
          <View style={styles.container}>
            <View />
            <Image
              source={require('../../assets/images/LogoStudiolo.png')}
              style={styles.logo}
            />
            {condtionalViews}
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
