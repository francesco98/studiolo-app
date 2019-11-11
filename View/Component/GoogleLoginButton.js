import React, { Component } from 'react'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ReactNative, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
  title: {
    color: '#6f6f6f',
    padding: 5,
    paddingLeft: 25,
    fontFamily: 'Lato-Light',
    fontVariant: ['small-caps'],
    textTransform: 'capitalize'
  }
})

class GoogleLoginButton extends Component {
  render () {
    return (
      <Button
        title='Login with Google'
        buttonStyle={{
          backgroundColor: 'white',
          padding: 10,
          paddingHorizontal: 25,
          justifyContent: 'flex-start'
        }}
        titleStyle={styles.title}
        icon={
          <Image
            source={require('../../assets/images/GoogleIcon.png')}
            style={{ padding: 0, width: 40, height: 40 }}
          />
        }
      />
    )
  }
}
export default GoogleLoginButton
