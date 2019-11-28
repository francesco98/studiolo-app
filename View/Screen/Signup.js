import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  BackHandler
} from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import InputSignup from '../Component/InputSignup'
import User from '../../Model/User'

export default class SignupPage extends Component {
  _screenErrors = {
    isNameError: false,
    isLastError: false,
    isEmailError: true,
    isMatricolaError: true
  }

  static navigationOptions = {
    title: 'Signup',
    headerLeft: null,
    gesturesEnabled: false,
    headerStyle: {
      display: 'none'
    }
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton)
  }

  handleBackButton () {
    return true
  }

  render () {
    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height
    return (
      <ScrollView ref='_scrollView' horizontal pagingEnabled>
        <View
          style={{
            backgroundColor: '#009788',
            width: screenWidth,
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <InputSignup
            icon='user'
            placeholder='Nome'
            bg='#00b5a1'
            defaultValue={User.getInstance().getFirstName()}
            type='default'
            onStateChanged={state => (this._screenErrors.isNameError = state)}
          />

          <InputSignup
            icon='user'
            placeholder='Cognome'
            bg='#00b5a1'
            defaultValue={User.getInstance().getLastName()}
            type='default'
            onStateChanged={state => (this._screenErrors.isLastError = state)}
          />

          <InputSignup
            icon='mail'
            placeholder='Email universitaria'
            bg='#00b5a1'
            type='email-address'
            onStateChanged={state => (this._screenErrors.isEmailError = state)}
          />

          <View style={styles.ArrowRight}>
            <Icon
              name='right'
              size={50}
              onPress={() => {
                this.refs._scrollView.scrollTo({ x: screenWidth })
              }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#3e50b2',
            width: screenWidth,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
           <InputSignup
            icon='mail'
            placeholder='Matricola'
            bg='#5e76ff'
            type='numeric'
            onStateChanged={state =>
              (this._screenErrors.isMatricolaError = state)
            }
          />
          <View style={styles.ArrowLeft}>
            <Icon
              name='left'
              size={50}
              onPress={() => {
                this.refs._scrollView.scrollTo({ x: 0 })
              }}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  // NOTA: con questo scrolling per le view vanno fatti styling individuali
  Text: {
    color: 'purple',
    textAlign: 'center',
    fontSize: 40
  },
  ArrowRight: {
    position: 'absolute',
    right: 30,
    bottom: 30
  },
  ArrowLeft: {
    position: 'absolute',
    left: 30,
    bottom: 30
  },
  InputContainer: {
    borderBottomWidth: 0,
    borderRadius: 10,
    backgroundColor: '#00b5a1',
    padding: 10
  },
  InputText: {
    fontFamily: 'Lato-Regular',
    color: '#333333'
  },
  LeftIconStyle: { paddingRight: 10 }
})
