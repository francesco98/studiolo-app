import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  BackHandler,
  Picker,
  KeyboardAvoidingView
} from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import InputSignup from '../Component/InputSignup'
import User from '../../Model/User'
import SignupController from '../../Controller/SignupController'

export default class SignupPage extends Component {
  _signupController = new SignupController()

  _inputValues = {
    nameValue: User.getInstance().getFirstName(),
    lastValue: User.getInstance().getLastName(),
    emailValue: '',
    matricolaValue: ''
  }

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
  state = {
    universities: [],
    scelta: 1,
  
  }

  _checkErrors () {
    return (
      !this._screenErrors.isNameError &&
      !this._screenErrors.isLastError &&
      !this._screenErrors.isEmailError &&
      !this._screenErrors.isMatricolaError
    )
  }

  _finishProfiling(result) {
    const { navigate } = this.props.navigation
      if (result){
        navigate('Dashboard', {}) 
        }
      else{
          alert('Qualcosa è andato storto :(')
      }
      
        }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
    this._signupController
      .getUniversities()
      .then(universities => this.setState({ universities: universities }))
  
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
    let heightPicker = 40 * this.state.universities.length

    return (
      <ScrollView ref='_scrollView' horizontal pagingEnabled>
        <KeyboardAvoidingView
          style={{
            backgroundColor: '#009788',
            width: screenWidth,
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          behavior="padding"
        >
          <InputSignup
            icon='user'
            placeholder='Nome'
            bg='#00b5a1'
            defaultValue={User.getInstance().getFirstName()}
            type='default'
            onValueChanged={text => (this._inputValues.nameValue = text)}
            onStateChanged={state => (this._screenErrors.isNameError = state)}

          />

          <InputSignup
            icon='user'
            placeholder='Cognome'
            bg='#00b5a1'
            defaultValue={User.getInstance().getLastName()}
            type='default'
            onValueChanged={text => (this._inputValues.lastValue = text)}
            onStateChanged={state => (this._screenErrors.isLastError = state)}
          />

          <InputSignup
            icon='mail'
            placeholder='Email universitaria'
            bg='#00b5a1'
            type='email-address'
            onValueChanged={text => (this._inputValues.emailValue = text)}
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
        </KeyboardAvoidingView>
        <KeyboardAvoidingView
          
          style={{
            backgroundColor: '#3e50b2',
            width: screenWidth,
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          behavior="padding"
        >
          <InputSignup
            icon='book'
            placeholder='Matricola'
            bg='#5e76ff'
            type='numeric'
            onValueChanged={text => (this._inputValues.matricolaValue = text)}
            onStateChanged={state =>
              (this._screenErrors.isMatricolaError = state)
            }
          />
          <View>
            <Picker
              selectedValue={this.state.scelta}
              style={{ width: screenWidth - 100, paddingTop: 50 }}
              itemStyle={{
                backgroundColor: '#5e76ff',
                height: heightPicker,
                borderRadius: 10,
                color: '#333333',
                fontFamily: 'Lato-Regular'
              }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ scelta: itemValue }, () =>
                  console.log(this.state.scelta)
                )
              }}
            >
              {this.state.universities.map(v => {
                return <Picker.Item label={v.name} value={v.id} />
              })}
            </Picker>
          </View>
          <View style={styles.ArrowLeft}>
            <Icon
              name='left'
              size={50}
              onPress={() => {
                this.refs._scrollView.scrollTo({ x: 0 })
              }}
            />
          </View>
          <View style={styles.ArrowRight}>
            <Icon
              name='check'
              size={50}
              onPress={() => {
                if (this._checkErrors()) {
                  this._signupController.profilingUser(
                    this._inputValues.nameValue,
                    this._inputValues.lastValue,
                    this._inputValues.emailValue,
                    this._inputValues.matricolaValue,
                    this.state.scelta
                  ).then((result) => this._finishProfiling(result))
                } else {
                  alert('Compila tutti i campi!')
                }
              }}
            />
          </View>
        </KeyboardAvoidingView>
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
