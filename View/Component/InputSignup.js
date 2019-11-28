import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'

export default class InputSignup extends Component {
  _errorMessage = ''

  state = { isError: false }

  _validate (type, text) {

    this.props.onValueChanged(text);

    let isError = false

    if (type == 'email-address') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (reg.test(text) === false) {
        this._errorMessage = 'Email non corretta!'
        isError = true;
      }
    } else if (type == 'default') {
      if (text.length < 3) {
        this._errorMessage = 'Troppo corto!'
        isError = true;
      }
    } else if (type == 'numeric') {
      let reg = /^\d{6}$/
      if (reg.test(text) === false) {
        this._errorMessage = 'Matricola non corretta'
        isError = true;
      }
    }

    this.setState({ isError: isError })
    this.props.onStateChanged(isError)
  }

  render () {
    return (
      <Input
        containerStyle={{ padding: 10, }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          borderRadius: 10,
          backgroundColor: this.props.bg,
          padding: 10
        }}
        keyboardType={this.props.type}
        inputStyle={styles.InputText}
        placeholder={this.props.placeholder}
        leftIcon={<Icon name={this.props.icon} size={24} color='#333333' />}
        leftIconContainerStyle={styles.LeftIconStyle}
        errorMessage={this._errorMessage}
        errorStyle={
          this.state.isError ? styles.ErrorStyle : { display: 'none' }
        }
        onChangeText={text => this._validate(this.props.type, text)}
        defaultValue={this.props.defaultValue}
      />
    )
  }
}

const styles = StyleSheet.create({
  InputText: {
    fontFamily: 'Lato-Regular',
    color: '#333333'
  },
  LeftIconStyle: { paddingRight: 10 },
  ErrorStyle: {
    color: '#b50000',
    fontFamily: 'Lato-Regular'
  }
})
